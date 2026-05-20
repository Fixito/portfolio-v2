const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  document.querySelectorAll('.reveal-stagger > *').forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
} else {
  document
    .querySelectorAll('.reveal')
    .forEach((el) => el.classList.add('visible'));
  document.querySelectorAll('.reveal-stagger > *').forEach((el) => {
    el.classList.add('reveal', 'visible');
  });
}
