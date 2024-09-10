import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  if (width < 1440) {
    new Swiper('.swiper-about', {
      slidesPerView: 2,
      spaceBetween: 0,
      slideToClickedSlide: true,
      loop: true,
      loopedSlides: 1,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      breakpoints: {
        320: {
          loop: true,
          loopedSlides: 1,
          slidesPerView: 2,
          spaceBetween: 0,
          slideToClickedSlide: true,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
          slideToClickedSlide: true,
          loop: true,
          loopedSlides: 1,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next.btn-next-skill',
      },
    });
  }
});

const skillList = document.querySelector('.list-my-skills');
const skills = skillList.children;
const buttonNext = document.querySelector('.btn-next-skill');
let currentActive = skills[0];

function updateActive() {
  currentActive.classList.remove('active');

  let nextActive = currentActive.nextElementSibling;
  if (!nextActive) {
    nextActive = skillList.firstElementChild;
  }

  currentActive = nextActive;
  currentActive.classList.add('active');
}

buttonNext.addEventListener('click', () => {
  updateActive();
});
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    updateActive();
  }
});