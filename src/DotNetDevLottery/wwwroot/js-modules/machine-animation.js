// Machine Animation - Plain JavaScript version (no TypeScript)
// Physics-based lottery ball drawing animation

import { defineEngine } from './physics-engine.js';
import { coords } from './coord-utility.js';

// Ball class
class Ball {
  static BALL_SIZE_PROPERTY_NAME = '--ball-size';

  constructor({ engine, rapier, ballSize, size, element, index }) {
    this.engine = engine;
    this.rapier = rapier;
    this.element = document.createElement('div');
    this.element.classList.add('ball');
    this.size = size;
    this.ballSize = ballSize;
    this.element.style.setProperty(Ball.BALL_SIZE_PROPERTY_NAME, String(this.ballSize));
    element.appendChild(this.element);

    const rapierBallSize = coords.toRapier.length(ballSize / 2);
    const bodyDesc = new rapier.RigidBodyDesc(rapier.RigidBodyType.Dynamic)
      .setTranslation(...coords.toRapier.vector(size.wrapper / 2 + index, size.wrapper / 2 + index))
      .setCcdEnabled(true);
    const colliderDesc = rapier.ColliderDesc.ball(rapierBallSize)
      .setRestitution(0.3);
    this.body = engine.world.createRigidBody(bodyDesc);
    this.collider = engine.world.createCollider(colliderDesc, this.body);
  }

  step() {
    if (!this.body) {
      return false;
    }
    const [x, y] = coords.fromBody.vector(this.body);
    this.element.style.transform = `translate(${(x - this.ballSize / 2)}px, ${(y - this.ballSize / 2)}px) scale(1)`;
    return true;
  }

  destroy() {
    if (!this.body) {
      return;
    }
    this.engine.world.removeRigidBody(this.body);
    this.body = null;
    this.collider = null;
    this.element?.remove();
    this.element = null;
  }

  shake() {
    if (!this.body) {
      return false;
    }
    const pulseVectorCorrection = (8 * this.ballSize / 30);
    const vector = coords.toRapier.vectorObject(
      (Math.random() - 0.5) * pulseVectorCorrection * this.size.machine,
      (Math.random() - 0.5) * pulseVectorCorrection * this.size.machine,
    );
    this.body.applyImpulse(vector, true);
    return true;
  }

  getHandle() {
    return this.collider?.handle;
  }

  getSize() {
    return this.ballSize;
  }

  getElement() {
    return this.element;
  }

  getBody() {
    return this.body;
  }
}

function addMachineSphereToEngine({ size, engine, rapier }) {
  const COLLIDER_SEGMENT = 20;
  const centerPosition = (size.wrapper / 2);

  return Array.from({ length: COLLIDER_SEGMENT }, (_, i) => i)
    .map((index) => {
      const angle = (index / COLLIDER_SEGMENT) * Math.PI * 2;

      const x = centerPosition + (size.machine / 2) * Math.cos(angle);
      const y = centerPosition + (size.machine / 2) * Math.sin(angle);
      const bodyDesc = new rapier.RigidBodyDesc(rapier.RigidBodyType.Fixed)
        .setTranslation(...coords.toRapier.vector(x, y))
        .setRotation(coords.toRapier.angle(angle));
      const body = engine.world.createRigidBody(bodyDesc);
      const colliderDesc = rapier.ColliderDesc.cuboid(...coords.toRapier.lengths(10, 100))
        .setActiveEvents(rapier.ActiveEvents.COLLISION_EVENTS)
        .setRestitution(0.5);

      const collider = engine.world.createCollider(colliderDesc, body);

      return {
        angle,
        rigid: body,
        collider,
      };
    });
}

function addBallsToEngine({ engine, rapier, count, size, element }) {
  const balls = Array.from({ length: count }, (_, index) => {
    const BALL_SIZE = size.machine / (Math.sqrt(count) * 1.5 + 2);
    const ball = new Ball({
      engine,
      rapier,
      element,
      index,
      size,
      ballSize: BALL_SIZE,
    });
    return ball;
  });
  return balls;
}

async function defineDrawMachineAnimation({
  count,
  drawCallback,
  animationEndCallback,
  element = document.querySelector('#app'),
}) {
  const engineData = await defineEngine();
  const { rapier, world, events, queue } = engineData;
  
  const size = {
    machine: 0,
    wrapper: 0,
  };
  // 70%
  const width = document.documentElement.clientWidth * 7 / 10;
  // 버튼 열 빼기
  const height = document.documentElement.clientHeight - 100;
  size.wrapper = Math.min(width, height);
  size.machine = size.wrapper * 0.7;
  element.style.width = `${size.wrapper}px`;
  element.style.height = `${size.wrapper}px`;

  const machineElement = document.createElement("div");
  machineElement.classList.add('machine-inner');
  machineElement.style.width = `${size.machine}px`;
  machineElement.style.height = `${size.machine}px`;
  element.appendChild(machineElement);

  const engine = { world, events, queue };
  const sphere = addMachineSphereToEngine({
    engine,
    rapier,
    size,
  });
  const topCollider = sphere.find((part) => part.angle === Math.PI * 3 / 2).collider;
  const renderedBallCount = count;
  let balls = addBallsToEngine({
    engine,
    rapier,
    count: renderedBallCount,
    size,
    element,
  });
  
  events.on('step', () => {
    balls.forEach(ball => {
      ball.step();
    });
  });

  // machine의 상단 collision 이벤트 관련 코드
  let isEventEnabled = false;
  events.on(`collision_start_${topCollider.handle}`, async (handle) => {
    if (!isEventEnabled) {
      return;
    }
    isEventEnabled = false;
    const targetBallIndex = balls.findIndex((ball) => ball.getHandle() === handle);
    const targetBall = balls[targetBallIndex];
    const targetBallElement = targetBall.getElement();
    if (!targetBallElement) {
      return;
    }
    const transformString = targetBallElement.style.transform;
    const ballSize = Number(targetBallElement.style.getPropertyValue(Ball.BALL_SIZE_PROPERTY_NAME));
    const response = await drawCallback();

    // 뽑힌 공 애니메이션
    const width = size.machine * 2 / 3;
    const center = size.wrapper / 2 - ballSize / 2;

    const ball = document.createElement('div');
    ball.classList.add('ball', 'ball--drawed');
    const nameElement = document.createElement('div');
    nameElement.classList.add('ball-text', 'name');
    nameElement.innerText = response.personName;
    const emailElement = document.createElement('div');
    emailElement.classList.add('ball-text', 'email');
    emailElement.innerText = response.email;
    const phoneElement = document.createElement('div');
    phoneElement.classList.add('ball-text', 'phone');
    phoneElement.innerText = response.phone;
    ball.style.transform = transformString;
    ball.style.setProperty(Ball.BALL_SIZE_PROPERTY_NAME, String(ballSize));

    ball.append(nameElement, emailElement, phoneElement);
    element.append(ball);

    window.setTimeout(async () => {
      const animation = ball.animate([
        { transform: transformString, color: "#666666", backgroundColor: "#666666" },
        {
          transform: `translate(${center}px, ${center}px) scale(${width / ballSize / 3})`,
          color: "#666666",
          backgroundColor: "#666666",
          offset: 0.8
        },
        {
          transform: `translate(${center}px, ${center}px) scale(${(width) / ballSize})`,
          color: "#000000",
          backgroundColor: "#DDDDDD"
        },
      ],
        {
          duration: 2000,
        }
      );
      const onAnimationEnd = async () => {
        await animationEndCallback();
        animation.removeEventListener("finish", onAnimationEnd);
      };
      animation.addEventListener("finish", onAnimationEnd);
      ball.style.transform = `translate(${center}px, ${center}px) scale(${(width) / ballSize})`;
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
    world.free();
    queue.free();
  }

  return {
    removeEngine,
    drawBall: async (duration) => {
      let isEventEnded = false;
      timeouts.push(
        window.setTimeout(() => {
          isEventEnabled = true;
          const drawedBallList = document.querySelectorAll('.ball--drawed');
          drawedBallList.forEach((ballElement) => {
            ballElement.remove();
          });
        }, duration * 0.7),
        window.setTimeout(() => {
          isEventEnded = true;
        }, duration)
      );

      const PULSE_INTERVAL_MS = 800;
      for (let i = 0; i < duration / PULSE_INTERVAL_MS; i++) {
        timeouts.push(
          window.setTimeout(() => {
            balls.forEach((ball) => {
              ball.shake();
            });
          }, i * PULSE_INTERVAL_MS)
        );
      }
      return new Promise((resolve) => {
        function waitForBallsToStop() {
          if (isEventEnded) {
            resolve();
          } else {
            window.requestAnimationFrame(() => {
              setTimeout(waitForBallsToStop, 1000 / 60);
            });
          }
        }
        waitForBallsToStop();
      });
    }
  };
}

let ballInterface;

export async function executeDrawBall(count) {
  for (let i = 0; i < count; i++) {
    await ballInterface?.drawBall(5000);
  }
}

export function executeRemoveEngine() {
  ballInterface?.removeEngine();
}

const debounce = (callback, wait) => {
  let timeoutId = null;

  return (...args) => {
    if (timeoutId) window.clearTimeout(timeoutId);

    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

export async function init(
  count,
  element,
  instance,
  drawCallback,
  animationEndCallback,
) {
  const option = {
    count,
    element,
    drawCallback: async () => {
      return instance.invokeMethodAsync(drawCallback);
    },
    animationEndCallback: async () => {
      return instance.invokeMethodAsync(animationEndCallback);
    },
  };
  ballInterface = await defineDrawMachineAnimation(option);
  const onResize = debounce(async () => {
    const isInPage = document.body.contains(element);
    if (!isInPage) {
      window.removeEventListener('resize', onResize);
      return;
    }
    ballInterface.removeEngine();
    ballInterface = await defineDrawMachineAnimation(option);
  }, 500);
  window.addEventListener('resize', onResize);
}
