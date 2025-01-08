import type { RapierNamespace } from "../utils/getRapier";
import type { Engine } from "../utils/defineEngine";

import { defineEngine } from "../utils/defineEngine";
import { coords } from "../utils/rapierCoordUtility";
import { getRapier, Rapier } from "../utils/getRapier";

interface Size {
  machine: number;
  wrapper: number;
}

interface EventCallbackResult {
  personName: string;
  email: string;
  phone: string;
}
type EventCallback = () => Promise<EventCallbackResult>;

interface DefineDrawMachineAnimationOption {
  count: number;
  drawCallback: EventCallback;
  animationEndCallback: () => Promise<void>;
  element?: HTMLDivElement;
}

async function defineDrawMachineAnimation({
  count,
  drawCallback,
  animationEndCallback,
  element = document.querySelector<HTMLDivElement>('#app')!,
}: DefineDrawMachineAnimationOption) {
  const rapier = await getRapier();
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

  const engine = defineEngine(rapier);
  const sphere = addMachineSphereToEngine({
    engine,
    rapier,
    size,
  });
  const topCollider = sphere.find((part) => part.angle === Math.PI * 3 / 2)!.collider;
  const renderedBallCount = count;
  let balls = addBallsToEngine({
    engine,
    rapier,
    count: renderedBallCount,
    size,
    element,
  });
  engine.events.on('step', () => {
    balls.forEach(ball => {
      ball.step();
    })
  })
  // machine의 상단 collision 이벤트 관련 코드
  let isEventEnabled = false;
  engine.events.on(`collision_start_${topCollider.handle}`, async (handle) => {
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
    const ballSize = Number(targetBallElement.style.getPropertyValue(Ball.BALL_SIZE_PROPERTY_NAME))
    const response = await drawCallback();

    // 뽑힌 공 애니메이션
    const width = size.machine * 2 / 3;
    const center = size.wrapper / 2 - ballSize / 2;

    const ball = document.createElement('div');
    ball.classList.add('ball', 'ball--drawed');
    const nameElement = document.createElement('div');
    nameElement.classList.add('ball-text','name');
    nameElement.innerText = response.personName;
    const emailElement = document.createElement('div');
    emailElement.classList.add('ball-text','email');
    emailElement.innerText = response.email;
    const phoneElement = document.createElement('div');
    phoneElement.classList.add('ball-text','phone');
    phoneElement.innerText = response.phone;
    ball.style.transform = transformString;
    ball.style.setProperty(Ball.BALL_SIZE_PROPERTY_NAME, String(ballSize));

    ball.append(nameElement, emailElement, phoneElement);
    element.append(ball);

    window.setTimeout(async ()=> {
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

  const timeouts = [] as ReturnType<typeof setTimeout>[];
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
      const drawedBallList = document.querySelectorAll('.ball--drawed');
      drawedBallList.forEach((ballElement) => {
        ballElement.remove();
      })
      const DURATION = 10000
      timeouts.push(
        window.setTimeout(() => {
          isEventEnabled = true;
        }, DURATION / 2)
      );

      const PULSE_INTERVAL_MS = 800;
      for(let i = 0; i < DURATION / PULSE_INTERVAL_MS; i++) {
        timeouts.push(
          window.setTimeout(() => {
            balls.forEach((ball) => {
              ball.shake();
            })
          }, i * PULSE_INTERVAL_MS)
        );
      }
    }
  }
}

interface AddMachineToEngineOption {
  size: Size;
  engine: Engine;
  rapier: Rapier;
}
function addMachineSphereToEngine({ size, engine, rapier }: AddMachineToEngineOption) {
  const COLLIDER_SEGMENT = 20;
  const centerPosition = (size.wrapper / 2);

  return Array.from({ length: COLLIDER_SEGMENT }, (_, i) => i)
    .map((index) => {
      const angle = (index / COLLIDER_SEGMENT) * Math.PI * 2;

      const x = centerPosition + (size.machine / 2) * Math.cos(angle);
      const y = centerPosition + (size.machine / 2) * Math.sin(angle);
      const bodyDesc = new rapier.RigidBodyDesc(rapier.RigidBodyType.Fixed)
        .setTranslation(
          ...coords.toRapier.vector(x, y),
        )
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
interface AddBallsToEngineOption {
  engine: Engine;
  rapier: Rapier;
  count: number;
  size: Size;
  element: HTMLDivElement;
}

interface BallConstructorArg extends Omit<AddBallsToEngineOption, 'count'> {
  ballSize: number;
  index: number;
}

class Ball {
  static BALL_SIZE_PROPERTY_NAME = '--ball-size';
  #size: Size;
  #ballSize: number;
  engine: Engine;
  #element: HTMLDivElement | null;
  #body: RapierNamespace.RigidBody | null;
  #collider: RapierNamespace.Collider | null;

  constructor({
    engine,
    rapier,
    ballSize,
    size,
    element: wrapperElement,
    index,
  }: BallConstructorArg) {
    this.engine = engine;
    this.#element = document.createElement('div');
    this.#element.classList.add('ball');
    this.#size = size;
    this.#ballSize = ballSize;
    this.#element.style.setProperty(Ball.BALL_SIZE_PROPERTY_NAME, String(this.#ballSize));
    wrapperElement.appendChild(this.#element);

    const rapierBallSize = coords.toRapier.length(ballSize / 2);
    const bodyDesc = new rapier.RigidBodyDesc(rapier.RigidBodyType.Dynamic)
      .setTranslation(
        ...coords.toRapier.vector(size.wrapper / 2 + index, size.wrapper / 2 + index)
      )
      .setCcdEnabled(true)
    const colliderDesc = rapier.ColliderDesc.ball(rapierBallSize)
      .setRestitution(0.3);
    this.#body = engine.world.createRigidBody(bodyDesc);
    this.#collider = engine.world.createCollider(colliderDesc, this.#body);
  }
  step() {
    if (!this.#body) {
      return false;
    }
    const [x, y] = coords.fromBody.vector(this.#body)
    this.#element!.style.transform = `translate(${(x - this.#ballSize / 2)}px, ${(y - this.#ballSize / 2)}px) scale(1)`;
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
    const pulseVectorCorrection = (8 * this.#ballSize / 30)
    const vector = coords.toRapier.vectorObject(
      (Math.random() - 0.5) * pulseVectorCorrection * this.#size.machine,
      (Math.random() - 0.5) * pulseVectorCorrection * this.#size.machine,
    )
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
}

function addBallsToEngine(option: AddBallsToEngineOption): Ball[] {
  const {
    engine,
    rapier,
    count,
    size,
    element,
  } = option;
  const balls = Array.from({ length: count }, (_, index) => {
    const BALL_SIZE = size.machine / (Math.sqrt(count) * 1.5 + 2);
    const ball = new Ball({
      engine,
      rapier,
      element,
      index,
      size,
      ballSize: BALL_SIZE,
    })
    return ball;
  })
  return balls;
}

let ballInterface: Awaited<ReturnType<typeof defineDrawMachineAnimation>>;


interface DotNetInterface {
  invokeMethodAsync: <T extends any[], R extends any>(...args: T) => Promise<R>;
  invokeMethod: <T extends any[], R extends any>(...args: T) => R;
}

export function executeDrawBall() {
  ballInterface?.drawBall();
}

export function executeRemoveEngine() {
  ballInterface?.removeEngine();
}

const debounce = (callback: (...args: any[]) => void, wait: number) => {
  let timeoutId: ReturnType<typeof window.setTimeout> | null = null;

  return (...args: any[]) => {
    if (timeoutId) window.clearTimeout(timeoutId);

    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}

export async function init(
  count: number,
  element: HTMLDivElement,
  // TODO: DotNetObjectReference이 타이핑이 있다면 교체
  instance: DotNetInterface,
  drawCallback: EventCallback,
  animationEndCallback: () => Promise<void>,
) {
  const option: DefineDrawMachineAnimationOption = {
    count,
    element,
    drawCallback: async () => {
      return instance.invokeMethodAsync(
        drawCallback,
      )
    },
    animationEndCallback: async () => {
      return instance.invokeMethodAsync(
        animationEndCallback,
      )
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
