import { animate } from 'motion';

import { easeOut, prefersReducedMotion } from './animations';

if (!prefersReducedMotion() && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll<HTMLElement>('[data-project-card]').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      animate(card as Element, { y: -6 }, { duration: 0.3, ease: easeOut });
    });
    card.addEventListener('mouseleave', () => {
      animate(card as Element, { y: 0 }, { duration: 0.35, ease: easeOut });
    });
  });
}
