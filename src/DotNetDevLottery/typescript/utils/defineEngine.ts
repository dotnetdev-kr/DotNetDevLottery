// Based on code https://github.com/xkcd/incredible
import type { Emitter } from "mitt";
import type { Rapier, RapierNamespace } from "./getRapier";

import mitt from "mitt";

type LoopEventKey = `collision_start_${number}` | `collision_end_${number}`;

type LoopEvents = {
  step: void
} & {
  [K in LoopEventKey]: number
}

const GRAVITY = { x: 0, y: -9.81 };
const TICK_MS = 1000 / 60;

export interface Engine {
  world: RapierNamespace.World;
  events: Emitter<LoopEvents>;
}

export function defineEngine(rapier: Rapier) {
  const world = new rapier.World(GRAVITY);
  world.timestep = TICK_MS / 1000;
  const queue = new rapier.EventQueue(true);
  const events = mitt<LoopEvents>();
  defineStep({world, queue, events});

  return {
    world,
    events,
    queue,
  };
}

function defineStep({
  world,
  queue,
  events,
}: Engine & { queue: RapierNamespace.EventQueue }) {
  let tickCount = 0;
  let baseTime = 0;
  let lastTickTime = performance.now()

  const tickMs = Math.floor(TICK_MS)
  resetBaseTime(lastTickTime, tickMs)

  let raf: number = -1

  function resetBaseTime(now: number, tick: number) {
    const newBaseTime = now - (tickCount + 1) * tick
    if (import.meta.env.MODE === "development") {
      console.debug(`Skipping ${newBaseTime - baseTime}ms`)
    }
    baseTime = newBaseTime
  }
  function stepAnimation() {
    if (!queue || !world) {
      return
    }

    const now = performance.now()

    // Skip forward in case of large pauses.
    if (now - lastTickTime > 30 * tickMs) {
      resetBaseTime(now, tickMs)
    }

    const neededTicks = Math.ceil((now - baseTime) / tickMs)

    while (tickCount < neededTicks) {
      const rapierStart = performance.now()
      world.step(queue)
      const rapierEnd = performance.now()

      const eventQueueCallbackStart = performance.now()
      queue.drainCollisionEvents((handle1, handle2, started) => {

        const eventName = started ? 'start' : 'end'
        events.emit(`collision_${eventName}_${handle1}`, handle2)
        events.emit(`collision_${eventName}_${handle2}`, handle1)
      })
      const eventQueueCallbackEnd = performance.now()

      const stepCallbackStart = performance.now()
      events.emit('step')
      const stepCallbackEnd = performance.now()

      if (import.meta.env.MODE === "development" && tickCount % 60 === 0) {
        console.debug({
          rapier: ms(rapierEnd - rapierStart),
          eventQueue: ms(eventQueueCallbackEnd - eventQueueCallbackStart),
          stepCallback: ms(stepCallbackEnd - stepCallbackStart),
          bodies: world.bodies.len(),
        })
      }

      tickCount++
      lastTickTime = performance.now()
    }

    raf = requestAnimationFrame(stepAnimation)
  }
  raf = requestAnimationFrame(stepAnimation)
  return raf;
}

function ms(value: number) {
  return `${value.toFixed(1)}ms`
}
