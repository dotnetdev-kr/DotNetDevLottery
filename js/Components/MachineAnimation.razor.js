import "../chunk-MLKGABMK.js";

// node_modules/.pnpm/mitt@3.0.1/node_modules/mitt/dist/mitt.mjs
function mitt_default(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}

// typescript/utils/defineEngine.ts
var GRAVITY = { x: 0, y: -9.81 };
var TICK_MS = 1e3 / 60;
function defineEngine(rapier) {
  const world = new rapier.World(GRAVITY);
  world.timestep = TICK_MS / 1e3;
  const queue = new rapier.EventQueue(true);
  const events = mitt_default();
  defineStep({ world, queue, events });
  return {
    world,
    events,
    queue
  };
}
function defineStep({
  world,
  queue,
  events
}) {
  let tickCount = 0;
  let baseTime = 0;
  let lastTickTime = performance.now();
  const tickMs = Math.floor(TICK_MS);
  resetBaseTime(lastTickTime, tickMs);
  let raf = -1;
  function resetBaseTime(now, tick) {
    const newBaseTime = now - (tickCount + 1) * tick;
    if (false) {
      console.debug(`Skipping ${newBaseTime - baseTime}ms`);
    }
    baseTime = newBaseTime;
  }
  function stepAnimation() {
    if (!queue || !world) {
      return;
    }
    const now = performance.now();
    if (now - lastTickTime > 30 * tickMs) {
      resetBaseTime(now, tickMs);
    }
    const neededTicks = Math.ceil((now - baseTime) / tickMs);
    while (tickCount < neededTicks) {
      const rapierStart = performance.now();
      world.step(queue);
      const rapierEnd = performance.now();
      const eventQueueCallbackStart = performance.now();
      queue.drainCollisionEvents((handle1, handle2, started) => {
        const eventName = started ? "start" : "end";
        events.emit(`collision_${eventName}_${handle1}`, handle2);
        events.emit(`collision_${eventName}_${handle2}`, handle1);
      });
      const eventQueueCallbackEnd = performance.now();
      const stepCallbackStart = performance.now();
      events.emit("step");
      const stepCallbackEnd = performance.now();
      if (false) {
        console.debug({
          rapier: ms(rapierEnd - rapierStart),
          eventQueue: ms(eventQueueCallbackEnd - eventQueueCallbackStart),
          stepCallback: ms(stepCallbackEnd - stepCallbackStart),
          bodies: world.bodies.len()
        });
      }
      tickCount++;
      lastTickTime = performance.now();
    }
    raf = requestAnimationFrame(stepAnimation);
  }
  raf = requestAnimationFrame(stepAnimation);
  return raf;
}

// typescript/utils/rapierCoordUtility.ts
var M_PER_PX = 1 / 50;
var coords = {
  toRapier: {
    x(distance) {
      return distance * M_PER_PX;
    },
    y(distance) {
      return -distance * M_PER_PX;
    },
    length(length) {
      return length * M_PER_PX;
    },
    lengths(...lengths) {
      return lengths.map(this.length);
    },
    vector(x, y, { xBasis, yBasis, scale = 1 } = { xBasis: 0, yBasis: 0, scale: 1 }) {
      return [this.x((x - xBasis) / scale), this.y((y - yBasis) / scale)];
    },
    vectorObject(x, y, { xBasis, yBasis, scale = 1 } = { xBasis: 0, yBasis: 0, scale: 1 }) {
      return {
        x: this.x((x - xBasis) / scale),
        y: this.y((y - yBasis) / scale)
      };
    },
    angle(angle) {
      return -angle;
    }
  },
  fromRapier: {
    x(distance) {
      return distance / M_PER_PX;
    },
    y(distance) {
      return -distance / M_PER_PX;
    },
    length(length) {
      return length / M_PER_PX;
    },
    vector(x, y) {
      return [this.x(x), this.y(y)];
    },
    angle(angle) {
      return -angle;
    }
  },
  fromBody: {
    vector(body) {
      const { x, y } = body.translation();
      return coords.fromRapier.vector(x, y);
    },
    angle(body) {
      return coords.fromRapier.angle(body.rotation());
    }
  }
};

// typescript/utils/getRapier.ts
function getRapier() {
  return import("../rapier-KBZQ7HBV.js");
}

// typescript/Components/MachineAnimation.razor.ts
async function defineDrawMachineAnimation({
  count,
  drawCallback,
  animationEndCallback,
  element = document.querySelector("#app")
}) {
  const rapier = await getRapier();
  const size = {
    machine: 0,
    wrapper: 0
  };
  const width = document.documentElement.clientWidth * 7 / 10;
  const height = document.documentElement.clientHeight - 100;
  size.wrapper = Math.min(width, height);
  size.machine = size.wrapper * 0.7;
  element.style.width = `${size.wrapper}px`;
  element.style.height = `${size.wrapper}px`;
  const machineElement = document.createElement("div");
  machineElement.classList.add("machine-inner");
  machineElement.style.width = `${size.machine}px`;
  machineElement.style.height = `${size.machine}px`;
  element.appendChild(machineElement);
  const engine = defineEngine(rapier);
  const sphere = addMachineSphereToEngine({
    engine,
    rapier,
    size
  });
  const topCollider = sphere.find((part) => part.angle === Math.PI * 3 / 2).collider;
  const renderedBallCount = count > 20 ? count : 20;
  let balls = addBallsToEngine({
    engine,
    rapier,
    count: renderedBallCount,
    size,
    element
  });
  engine.events.on("step", () => {
    balls.forEach((ball) => {
      ball.step();
    });
  });
  let isEventEnabled = false;
  engine.events.on(`collision_start_${topCollider.handle}`, async (handle) => {
    if (!isEventEnabled) {
      return;
    }
    isEventEnabled = false;
    const targetBallIndex = balls.findIndex((ball2) => ball2.getHandle() === handle);
    const targetBall = balls[targetBallIndex];
    const targetBallElement = targetBall.getElement();
    if (!targetBallElement) {
      return;
    }
    const transformString = targetBallElement.style.transform;
    const ballSize = Number(targetBallElement.style.getPropertyValue(Ball.BALL_SIZE_PROPERTY_NAME));
    const response = await drawCallback();
    const width2 = size.machine * 2 / 3;
    const center = size.wrapper / 2 - ballSize / 2;
    const ball = document.createElement("div");
    ball.classList.add("ball", "ball--drawed");
    const nameElement = document.createElement("div");
    nameElement.classList.add("ball-text", "name");
    nameElement.innerText = response.personName;
    const emailElement = document.createElement("div");
    emailElement.classList.add("ball-text", "email");
    emailElement.innerText = response.email;
    const phoneElement = document.createElement("div");
    phoneElement.classList.add("ball-text", "phone");
    phoneElement.innerText = response.phone;
    ball.style.transform = transformString;
    ball.style.setProperty(Ball.BALL_SIZE_PROPERTY_NAME, String(ballSize));
    ball.append(nameElement, emailElement, phoneElement);
    element.append(ball);
    window.setTimeout(async () => {
      const animation = ball.animate(
        [
          { transform: transformString, color: "#666666", backgroundColor: "#666666" },
          {
            transform: `translate(${center}px, ${center}px) scale(${width2 / ballSize / 3})`,
            color: "#666666",
            backgroundColor: "#666666",
            offset: 0.8
          },
          {
            transform: `translate(${center}px, ${center}px) scale(${width2 / ballSize})`,
            color: "#000000",
            backgroundColor: "#DDDDDD"
          }
        ],
        {
          duration: 2e3
        }
      );
      const onAnimationEnd = async () => {
        await animationEndCallback();
        animation.removeEventListener("finish", onAnimationEnd);
      };
      animation.addEventListener("finish", onAnimationEnd);
      ball.style.transform = `translate(${center}px, ${center}px) scale(${width2 / ballSize})`;
      ball.style.color = "#000000";
      ball.style.backgroundColor = "#DDDDDD";
    }, 0);
    targetBall.destroy();
    balls = balls.toSpliced(targetBallIndex, 1);
  });
  const timeouts = [];
  function removeEngine() {
    timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    balls.forEach((ball) => ball.destroy());
    machineElement.remove();
    engine.world.free();
    engine.queue.free();
  }
  return {
    removeEngine,
    drawBall: () => {
      const drawedBallList = document.querySelectorAll(".ball--drawed");
      drawedBallList.forEach((ballElement) => {
        ballElement.remove();
      });
      const DURATION = 1e4;
      timeouts.push(
        window.setTimeout(() => {
          isEventEnabled = true;
        }, DURATION / 2)
      );
      const PULSE_INTERVAL_MS = 800;
      for (let i = 0; i < DURATION / PULSE_INTERVAL_MS; i++) {
        timeouts.push(
          window.setTimeout(() => {
            balls.forEach((ball) => {
              ball.shake();
            });
          }, i * PULSE_INTERVAL_MS)
        );
      }
    }
  };
}
function addMachineSphereToEngine({ size, engine, rapier }) {
  const COLLIDER_SEGMENT = 20;
  const centerPosition = size.wrapper / 2;
  return Array.from({ length: COLLIDER_SEGMENT }, (_, i) => i).map((index) => {
    const angle = index / COLLIDER_SEGMENT * Math.PI * 2;
    const x = centerPosition + size.machine / 2 * Math.cos(angle);
    const y = centerPosition + size.machine / 2 * Math.sin(angle);
    const bodyDesc = new rapier.RigidBodyDesc(rapier.RigidBodyType.Fixed).setTranslation(
      ...coords.toRapier.vector(x, y)
    ).setRotation(coords.toRapier.angle(angle));
    const body = engine.world.createRigidBody(bodyDesc);
    const colliderDesc = rapier.ColliderDesc.cuboid(...coords.toRapier.lengths(10, 100)).setActiveEvents(rapier.ActiveEvents.COLLISION_EVENTS).setRestitution(0.5);
    const collider = engine.world.createCollider(colliderDesc, body);
    return {
      angle,
      rigid: body,
      collider
    };
  });
}
var Ball = class _Ball {
  static BALL_SIZE_PROPERTY_NAME = "--ball-size";
  #size;
  #ballSize;
  engine;
  #element;
  #body;
  #collider;
  constructor({
    engine,
    rapier,
    ballSize,
    size,
    element: wrapperElement,
    index
  }) {
    this.engine = engine;
    this.#element = document.createElement("div");
    this.#element.classList.add("ball");
    this.#size = size;
    this.#ballSize = ballSize;
    this.#element.style.setProperty(_Ball.BALL_SIZE_PROPERTY_NAME, String(this.#ballSize * 2));
    wrapperElement.appendChild(this.#element);
    const rapierBallSize = coords.toRapier.length(ballSize);
    const bodyDesc = new rapier.RigidBodyDesc(rapier.RigidBodyType.Dynamic).setTranslation(
      ...coords.toRapier.vector(size.wrapper / 2 + index, size.wrapper / 2 + index)
    ).setCcdEnabled(true);
    const colliderDesc = rapier.ColliderDesc.ball(rapierBallSize).setRestitution(0.3);
    this.#body = engine.world.createRigidBody(bodyDesc);
    this.#collider = engine.world.createCollider(colliderDesc, this.#body);
  }
  step() {
    if (!this.#body) {
      return false;
    }
    const [x, y] = coords.fromBody.vector(this.#body);
    this.#element.style.transform = `translate(${x - this.#ballSize}px, ${y - this.#ballSize}px) scale(1)`;
    return true;
  }
  destroy() {
    if (!this.#body) {
      return;
    }
    this.engine.world.removeRigidBody(this.#body);
    this.#body = null;
    this.#collider = null;
    this.#element?.remove();
    this.#element = null;
  }
  shake() {
    if (!this.#body) {
      return false;
    }
    const pulseVectorCorrection = 8 * this.#ballSize / 30;
    const vector = coords.toRapier.vectorObject(
      (Math.random() - 0.5) * pulseVectorCorrection * this.#size.machine,
      (Math.random() - 0.5) * pulseVectorCorrection * this.#size.machine
    );
    this.#body.applyImpulse(vector, true);
    return true;
  }
  getHandle() {
    return this.#collider?.handle;
  }
  getSize() {
    return this.#ballSize;
  }
  getElement() {
    return this.#element;
  }
  getBody() {
    return this.#body;
  }
};
function addBallsToEngine(option) {
  const {
    engine,
    rapier,
    count,
    size,
    element
  } = option;
  const balls = Array.from({ length: count }, (_, index) => {
    const BALL_SIZE = size.machine / (count * 0.75);
    const ball = new Ball({
      engine,
      rapier,
      element,
      index,
      size,
      ballSize: BALL_SIZE
    });
    return ball;
  });
  return balls;
}
var ballInterface;
function executeDrawBall() {
  ballInterface?.drawBall();
}
function executeRemoveEngine() {
  ballInterface?.removeEngine();
}
var debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    if (timeoutId) window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};
async function init(count, element, instance, drawCallback, animationEndCallback) {
  const option = {
    count,
    element,
    drawCallback: async () => {
      return instance.invokeMethodAsync(
        drawCallback
      );
    },
    animationEndCallback: async () => {
      return instance.invokeMethodAsync(
        animationEndCallback
      );
    }
  };
  ballInterface = await defineDrawMachineAnimation(option);
  const onResize = debounce(async () => {
    const isInPage = document.body.contains(element);
    if (!isInPage) {
      window.removeEventListener("resize", onResize);
      return;
    }
    ballInterface.removeEngine();
    ballInterface = await defineDrawMachineAnimation(option);
  }, 500);
  window.addEventListener("resize", onResize);
}
export {
  executeDrawBall,
  executeRemoveEngine,
  init
};
