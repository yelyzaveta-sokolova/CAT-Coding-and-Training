import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BUTTON_NEXT_PR = document.querySelector(".prj-n");
const BUTTON_PREV_PR = document.querySelector(".prj-p");
function initializeSwiperPrj() {
  try {
    const PRJ_SWIPER = new Swiper('.prj-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      direction: 'horizontal',
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      navigation: {
        nextEl: BUTTON_NEXT_PR,
        prevEl: BUTTON_PREV_PR,
      },
      speed: 900,
    });
  } catch (error) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, something went wrong.',
                position: 'center',
            });
    }
}

initializeSwiperPrj();




