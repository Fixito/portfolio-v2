import { animate, stagger } from 'motion';

import { easeContent, prefersReducedMotion } from './animations';

const heroItems = Array.from(document.querySelectorAll<HTMLElement>('[data-hero-item]'));

if (heroItems.length > 0) {
  if (prefersReducedMotion()) {
    heroItems.forEach((el) => {
      el.style.opacity = '1';
    });
  } else {
    animate(
      heroItems as Element[],
      { opacity: [0, 1], y: [24, 0] },
      { duration: 0.65, ease: easeContent, delay: stagger(0.1) },
    );
  }
}
