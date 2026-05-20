export const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const easeContent = [0.16, 1, 0.3, 1] as const;
export const easeOut = [0.23, 1, 0.32, 1] as const;
