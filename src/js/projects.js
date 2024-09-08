import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const SWIPER = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  direction: 'horizontal',
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 900,
});





