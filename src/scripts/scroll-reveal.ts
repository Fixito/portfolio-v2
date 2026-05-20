import { animate, inView, stagger } from 'motion';

import { easeContent, prefersReducedMotion } from './animations';

if (prefersReducedMotion()) {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
  document.querySelectorAll('.reveal-stagger > *').forEach((el) => {
    el.classList.add('reveal', 'visible');
  });
} else {
  // Track stagger children to avoid double-processing
  const staggerChildren = new Set<Element>();
  document.querySelectorAll('.reveal-stagger > *').forEach((el) => {
    staggerChildren.add(el);
    el.classList.add('reveal'); // apply initial hidden CSS state
  });

  // Stagger groups: observe parent, animate all children at once with stagger delay
  document.querySelectorAll<HTMLElement>('.reveal-stagger').forEach((container) => {
    const stop = inView(
      container,
      () => {
        animate(Array.from(container.children) as Element[], { opacity: [0, 1], y: [20, 0] }, { duration: 0.55, ease: easeContent, delay: stagger(0.05) });
        stop();
      },
      { amount: 0.12 },
    );
  });

  // Individual reveals not inside a stagger group
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    if (staggerChildren.has(el)) return;
    const stop = inView(
      el,
      () => {
        animate(el as Element, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, ease: easeContent });
        stop();
      },
      { amount: 0.12 },
    );
  });
}
