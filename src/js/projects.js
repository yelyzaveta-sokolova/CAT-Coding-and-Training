import Swiper from 'swiper/bundle';
import 'swiper/css';

 const swiper = new Swiper('.projects-swiper', {
   slidesPerView: 'auto',
   spaceBetween: 10,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   keyboard: {
     enabled: true,
     onlyInViewport: false,
   },
   mousewheel: true,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
 });

// const swiper = document.querySelector('.projects-swiper');
