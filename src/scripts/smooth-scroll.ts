export function scrollToSection(section: Element): void {
  const header = document.getElementById('site-header')!;
  const headerHeight = header.getBoundingClientRect().height;
  window.scrollTo({
    top: (section as HTMLElement).offsetTop - headerHeight,
    behavior: 'smooth',
  });
}
