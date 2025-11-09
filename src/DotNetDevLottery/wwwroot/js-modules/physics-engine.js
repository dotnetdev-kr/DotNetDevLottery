// Physics engine using Rapier2D - Plain JavaScript version (no TypeScript)
// Based on the original defineEngine.ts

import { getRapier } from './rapier-loader.js';

// Simple event emitter
class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, callback) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event).push(callback);
  }

  emit(event, data) {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach(callback => callback(data));
    }
  }

  off(event, callback) {
    const callbacks = this.events.get(event);
    if (callbacks) {
      if (callback) {
        const index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      } else {
        this.events.set(event, []);
      }
    }
  }
}

const GRAVITY = { x: 0, y: -9.81 };
const TICK_MS = 1000 / 60;

export async function defineEngine() {
  const rapier = await getRapier();
  
  const world = new rapier.World(GRAVITY);
  world.timestep = TICK_MS / 1000;
  const queue = new rapier.EventQueue(true);
  const events = new EventEmitter();
  
  defineStep({ world, queue, events });

  return {
    world,
    events,
    queue,
    rapier
  };
}

function defineStep({ world, queue, events }) {
  let tickCount = 0;
  let baseTime = 0;
  let lastTickTime = performance.now();
  const tickMs = Math.floor(TICK_MS);
  
  resetBaseTime(lastTickTime, tickMs);

  function resetBaseTime(now, tick) {
    const newBaseTime = now - (tickCount + 1) * tick;
    baseTime = newBaseTime;
  }

  function stepAnimation() {
    if (!queue || !world) {
      return;
    }

    const now = performance.now();

    // Skip forward in case of large pauses.
    if (now - lastTickTime > 30 * tickMs) {
      resetBaseTime(now, tickMs);
    }

    const neededTicks = Math.ceil((now - baseTime) / tickMs);

    while (tickCount < neededTicks) {
      world.step(queue);

      queue.drainCollisionEvents((handle1, handle2, started) => {
        const eventName = started ? 'start' : 'end';
        events.emit(`collision_${eventName}_${handle1}`, handle2);
        events.emit(`collision_${eventName}_${handle2}`, handle1);
      });

      events.emit('step');

      tickCount++;
      lastTickTime = performance.now();
    }

    requestAnimationFrame(stepAnimation);
  }
  
  requestAnimationFrame(stepAnimation);
}
