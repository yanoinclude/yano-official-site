/**
 * Legacy Yano motion controller retained for comparison and rollback.
 *
 * This module is intentionally not imported. The v3 sprite assets it used are
 * also kept in public/images/animation. To restore the previous behaviour,
 * wire this controller to the lane/island traveler and restore the v3 layered
 * sprite markup from repository history.
 */

type LegacyState = "walk" | "settle" | "start" | "scratch" | "idle";

const wait = (duration: number) =>
  new Promise((resolve) => window.setTimeout(resolve, duration));

const move = async (
  traveler: HTMLElement,
  from: string,
  to: string,
  duration: number,
  easing = "linear",
) => {
  const animation = traveler.animate(
    [{ offsetDistance: from }, { offsetDistance: to }],
    { duration, easing, fill: "forwards" },
  );
  try {
    await animation.finished;
  } catch {
    // Cancellation was expected when reduced-motion changed.
  }
};

const setState = (traveler: HTMLElement, state: LegacyState) => {
  traveler.classList.toggle("is-walking", state === "walk");
  traveler.classList.toggle("is-settling", state === "settle");
  traveler.classList.toggle("is-starting", state === "start");
  traveler.classList.toggle("is-scratching", state === "scratch");
  traveler.classList.toggle("is-idle", state === "idle");
};

export const playLegacyLaneOnce = async (traveler: HTMLElement) => {
  setState(traveler, "walk");
  await move(traveler, "0%", "43%", 3200);
  setState(traveler, "settle");
  await move(traveler, "43%", "50%", 650, "cubic-bezier(0.2, 0.7, 0.2, 1)");
  setState(traveler, "idle");
  await wait(300);
  setState(traveler, "scratch");
  await wait(1200);
  setState(traveler, "idle");
  await wait(800);
  setState(traveler, "start");
  await move(traveler, "50%", "57%", 650, "cubic-bezier(0.55, 0, 0.8, 0.35)");
  setState(traveler, "walk");
  await move(traveler, "57%", "100%", 3200);
};

export const playLegacyIslandOnce = async (traveler: HTMLElement) => {
  setState(traveler, "walk");
  await move(traveler, "0%", "90%", 9450);
  setState(traveler, "settle");
  await move(traveler, "90%", "100%", 1050, "cubic-bezier(0.2, 0.7, 0.2, 1)");
  setState(traveler, "idle");
  await wait(300);
  setState(traveler, "scratch");
  await wait(1200);
  setState(traveler, "idle");
  await wait(800);
  traveler.classList.add("is-returning");
  setState(traveler, "start");
  await move(traveler, "100%", "94%", 650, "cubic-bezier(0.55, 0, 0.8, 0.35)");
  setState(traveler, "walk");
  await move(traveler, "94%", "0%", 9870);
};
