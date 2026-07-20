const FRAME_COUNT = 30;
const WALK_FRAMES = Array.from({ length: 12 }, (_, index) => index);
const SLOW_FRAMES = [12, 13, 14, 15, 16, 17];
const SLOW_TIMES = [100, 110, 120, 140, 180, 280];
const IDLE_FRAME = 17;
const SCRATCH_FRAMES = [24, 25, 26, 27, 26, 27, 26, 25, 24];
const SCRATCH_TIMES = [220, 180, 170, 190, 170, 190, 170, 200, 240];
const RESTART_FRAMES = [17, 15, 14, 13, 12, 0];
const RESTART_TIMES = [180, 140, 120, 110, 100, 90];

type PhaseName =
  | "walking"
  | "slowing"
  | "idle"
  | "scratching"
  | "turning"
  | "restarting";

type Phase = {
  name: PhaseName;
  duration: number;
  from: number;
  to: number;
  frames?: number[];
  frameTimes?: number[];
};

type MotionController = {
  root: HTMLElement;
  traveler: HTMLElement;
  sprite: HTMLElement;
  image: HTMLImageElement;
  position: number;
  direction: 1 | -1;
  phaseIndex: number;
  phaseElapsed: number;
  phases: Phase[];
  visible: boolean;
  ready: boolean;
  active: boolean;
  lastFrame: number;
};

const randomBetween = (min: number, max: number) =>
  min + Math.random() * (max - min);

const sum = (values: number[]) => values.reduce((total, value) => total + value, 0);

const frameAtTime = (
  frames: number[],
  elapsed: number,
  frameTimes?: number[],
  loop = false,
) => {
  if (!frameTimes) {
    const index = Math.floor(elapsed / 105);
    return frames[loop ? index % frames.length : Math.min(index, frames.length - 1)];
  }
  const total = sum(frameTimes);
  let remaining = loop ? elapsed % total : Math.min(elapsed, total - 1);
  for (let index = 0; index < frameTimes.length; index += 1) {
    if (remaining < frameTimes[index]) return frames[index];
    remaining -= frameTimes[index];
  }
  return frames.at(-1) ?? 0;
};

const easeInCubic = (value: number) => value ** 3;
const easeOutCubic = (value: number) => 1 - (1 - value) ** 3;

const pathPixels = (controller: MotionController) => {
  const explicit = Number(controller.root.dataset.pathPixels);
  if (Number.isFinite(explicit) && explicit > 0) return explicit;
  return Math.max(280, controller.root.getBoundingClientRect().width + 120);
};

const speedFor = (controller: MotionController) => {
  const height = controller.sprite.getBoundingClientRect().height || 140;
  return Math.max(54, Math.min(82, height * 0.48));
};

const moveDuration = (controller: MotionController, from: number, to: number) =>
  Math.abs(to - from) / 100 * pathPixels(controller) / speedFor(controller) * 1000;

const buildPhases = (controller: MotionController) => {
  const direction = controller.direction;
  const edge = direction === 1 ? 96 : 4;
  const stop = direction === 1
    ? randomBetween(36, 64)
    : randomBetween(36, 64);
  const stopLead = stop - direction * 6;
  const edgeLead = edge - direction * 7;
  const start = controller.position;
  const restartEnd = start + direction * 4;
  const afterStop = stop + direction * 4;

  controller.phases = [
    {
      name: "restarting",
      duration: 740,
      from: start,
      to: restartEnd,
      frames: RESTART_FRAMES,
      frameTimes: RESTART_TIMES,
    },
    {
      name: "walking",
      duration: moveDuration(controller, restartEnd, stopLead),
      from: restartEnd,
      to: stopLead,
    },
    {
      name: "slowing",
      duration: sum(SLOW_TIMES),
      from: stopLead,
      to: stop,
      frames: SLOW_FRAMES,
      frameTimes: SLOW_TIMES,
    },
    { name: "idle", duration: randomBetween(1000, 1800), from: stop, to: stop },
    {
      name: "scratching",
      duration: sum(SCRATCH_TIMES),
      from: stop,
      to: stop,
      frames: SCRATCH_FRAMES,
      frameTimes: SCRATCH_TIMES,
    },
    { name: "idle", duration: randomBetween(550, 950), from: stop, to: stop },
    {
      name: "restarting",
      duration: 740,
      from: stop,
      to: afterStop,
      frames: RESTART_FRAMES,
      frameTimes: RESTART_TIMES,
    },
    {
      name: "walking",
      duration: moveDuration(controller, afterStop, edgeLead),
      from: afterStop,
      to: edgeLead,
    },
    {
      name: "slowing",
      duration: sum(SLOW_TIMES),
      from: edgeLead,
      to: edge,
      frames: SLOW_FRAMES,
      frameTimes: SLOW_TIMES,
    },
    { name: "idle", duration: randomBetween(380, 560), from: edge, to: edge },
    { name: "turning", duration: 240, from: edge, to: edge },
    { name: "idle", duration: randomBetween(180, 280), from: edge, to: edge },
  ];
  controller.phaseIndex = 0;
  controller.phaseElapsed = 0;
};

const applyFrame = (controller: MotionController, frame: number, bob = 0) => {
  if (frame !== controller.lastFrame) {
    controller.image.style.transform = `translate3d(${-(frame / FRAME_COUNT) * 100}%, 0, 0)`;
    controller.lastFrame = frame;
  }
  controller.sprite.style.setProperty("--yano-facing", String(controller.direction));
  controller.sprite.style.setProperty("--yano-bob", `${bob.toFixed(2)}px`);
};

const applyPosition = (controller: MotionController) => {
  controller.traveler.style.offsetDistance = `${controller.position}%`;
};

const updateController = (controller: MotionController, delta: number) => {
  if (!controller.active || controller.phases.length === 0) return;
  let phase = controller.phases[controller.phaseIndex];
  controller.phaseElapsed += delta;

  while (controller.phaseElapsed >= phase.duration) {
    controller.phaseElapsed -= phase.duration;
    controller.position = phase.to;
    controller.phaseIndex += 1;
    if (controller.phaseIndex >= controller.phases.length) {
      controller.direction = controller.direction === 1 ? -1 : 1;
      buildPhases(controller);
    }
    phase = controller.phases[controller.phaseIndex];
  }

  controller.root.dataset.motionState = phase.name;
  const progress = Math.min(1, controller.phaseElapsed / Math.max(1, phase.duration));
  const eased = phase.name === "slowing"
    ? easeOutCubic(progress)
    : phase.name === "restarting"
      ? easeInCubic(progress)
      : progress;
  controller.position = phase.from + (phase.to - phase.from) * eased;
  applyPosition(controller);

  let frame = IDLE_FRAME;
  let bob = 0;
  if (phase.name === "walking") {
    frame = frameAtTime(WALK_FRAMES, controller.phaseElapsed, undefined, true);
    bob = Math.sin(controller.phaseElapsed / 105 * Math.PI) * 1.15;
  } else if (phase.frames) {
    frame = frameAtTime(phase.frames, controller.phaseElapsed, phase.frameTimes);
    if (phase.name === "restarting") bob = Math.sin(progress * Math.PI) * 0.7;
  }
  applyFrame(controller, frame, bob);
};

let controllers: MotionController[] = [];
let animationFrame = 0;
let previousTime = 0;
let initialized = false;

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const tick = (time: number) => {
  const delta = previousTime ? Math.min(50, time - previousTime) : 0;
  previousTime = time;
  controllers.forEach((controller) => updateController(controller, delta));
  if (controllers.some((controller) => controller.active)) {
    animationFrame = requestAnimationFrame(tick);
  } else {
    animationFrame = 0;
    previousTime = 0;
  }
};

const refreshActiveState = () => {
  controllers.forEach((controller) => {
    controller.active = controller.visible && controller.ready && !reducedMotion.matches && !document.hidden;
    if (reducedMotion.matches) {
      controller.position = controller.root.dataset.motionKind === "island" ? 12 : 50;
      controller.direction = 1;
      controller.root.dataset.motionState = "idle";
      applyPosition(controller);
      applyFrame(controller, IDLE_FRAME);
    }
  });
  if (!animationFrame && controllers.some((controller) => controller.active)) {
    previousTime = 0;
    animationFrame = requestAnimationFrame(tick);
  }
};

export const initYanoMotions = () => {
  if (initialized) return;
  initialized = true;
  controllers = Array.from(document.querySelectorAll<HTMLElement>("[data-yano-raf]"))
    .map((root) => {
      const traveler = root.querySelector<HTMLElement>("[data-yano-traveler]");
      const sprite = root.querySelector<HTMLElement>("[data-yano-sprite]");
      const image = root.querySelector<HTMLImageElement>("[data-yano-sheet]");
      if (!traveler || !sprite || !image) return null;
      const position = Number(root.dataset.startPosition ?? 4);
      const controller: MotionController = {
        root,
        traveler,
        sprite,
        image,
        position,
        direction: 1,
        phaseIndex: 0,
        phaseElapsed: 0,
        phases: [],
        visible: false,
        ready: image.complete,
        active: false,
        lastFrame: -1,
      };
      applyPosition(controller);
      applyFrame(controller, IDLE_FRAME);
      buildPhases(controller);
      if (!image.complete) image.addEventListener("load", () => {
        controller.ready = true;
        refreshActiveState();
      }, { once: true });
      return controller;
    })
    .filter((controller): controller is MotionController => controller !== null);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const controller = controllers.find((item) => item.root === entry.target);
      if (controller) controller.visible = entry.isIntersecting;
    });
    refreshActiveState();
  }, { threshold: 0, rootMargin: "100px 0px" });
  controllers.forEach((controller) => observer.observe(controller.root));
  document.addEventListener("visibilitychange", refreshActiveState);
  reducedMotion.addEventListener("change", refreshActiveState);
  refreshActiveState();
};
