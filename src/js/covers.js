const SECTION = document.querySelector('.js-observered');

const OBSERVE_OPTIONS = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.5,
};
const OBSERVER_CALLBACK = entries => {
  if (entries[0].isIntersecting) {
    const TAGS = document.getElementsByClassName('marquee-line');
    Array.from(TAGS).forEach(tag => (tag.style.animationName = 'marqueeLine'));
  } else {
    const TAGS = document.getElementsByClassName('marquee-line');
    Array.from(TAGS).forEach(tag => (tag.style.animationName = 'none'));
  }
};
const OBSERVER = new IntersectionObserver(OBSERVER_CALLBACK, OBSERVE_OPTIONS);
OBSERVER.observe(SECTION);
