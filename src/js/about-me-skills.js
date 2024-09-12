import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';

  const SKILLS_SWIPER = new Swiper('.skills-me-swiper', {
    modules: [Navigation, Keyboard],
    navigation: {
      nextEl: '.skills-swiper-btn',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
    centeredSlidesBounds: true,
    speed: 400,
  });

const SKILLS_NEXTBUTTON = document.querySelector(
  '.skills-swiper-btn'
);
SKILLS_NEXTBUTTON.addEventListener('click', () => {
  if (window.innerWidth >= 1440) {
    SKILLS_SWIPER.slides[SKILLS_SWIPER.activeIndex].parentNode.appendChild(
      SKILLS_SWIPER.slides[SKILLS_SWIPER.activeIndex]
    );
    SKILLS_SWIPER.update();
  }
});
