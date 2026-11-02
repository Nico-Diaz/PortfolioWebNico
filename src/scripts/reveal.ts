// Images uncover from the bottom once, the first time they reach the viewport.
let observer: IntersectionObserver | undefined;

function setup() {
  document.documentElement.classList.add('js');
  observer?.disconnect();

  const targets = document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-in'));
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -12% 0px' },
  );
  targets.forEach((el) => observer!.observe(el));
}

// The intro sequence plays once per visit; returning to the home page is instant
const INTRO = 'nd-intro-done';
function markIntro() {
  if (sessionStorage.getItem(INTRO)) document.documentElement.classList.add('intro-done');
}
window.setTimeout(() => sessionStorage.setItem(INTRO, '1'), 1500);

// Classes must survive the router swapping <html> attributes
document.addEventListener('astro:after-swap', () => {
  document.documentElement.classList.add('js');
  markIntro();
});
document.addEventListener('astro:page-load', setup);
