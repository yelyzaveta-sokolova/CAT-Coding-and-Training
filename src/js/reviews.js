import Swiper from 'swiper/bundle';
import "swiper/css/bundle";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const REVIEW_CARDS = document.querySelector(".js-review-cards");
const BUTTON_NEXT = document.querySelector(".rev-n");
const BUTTON_PREV = document.querySelector(".rev-p");

const BASE_URL = 'https://portfolio-js.b.goit.study/api';

const GET_USERS = async () => {
    const FETCH_OPTIONS = {
        method: 'GET',
    };
    try {
        const RESPONSE = await fetch(`${BASE_URL}/reviews`, FETCH_OPTIONS);
        if (!RESPONSE.ok) {
            throw new Error(RESPONSE.status);
        }
        const DATA = await RESPONSE.json();
        return DATA;
    } catch (error) {
        return error;
    }
};
    GET_USERS()
        .then(DATA => {
        renderPosts(DATA);
        initializeSwiper();
})
.catch(error => {
            {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, something went wrong with reviews.',
                position: 'center',
            });
            }
    errorList();
});

function renderPosts(DATA) {
    REVIEW_CARDS.innerHTML = '';
    const MARKUP = DATA
    .map(({ author, avatar_url, review }) => {
        return `<li class="review-posts swiper-slide">
            <img class="review-avatar" src="${avatar_url}" alt="Avatar of ${author}">
            <h2 class="review-author">${author}</h2>
            <p class="review-post-body">${review}</p>
        </li>`;
    })
    .join("");
  REVIEW_CARDS.insertAdjacentHTML("beforeend", MARKUP);
};

// реалізація заглушки

function errorList() {

   const ELEMENT = document.querySelector('.error');
   if (ELEMENT) {
       ELEMENT.remove();
   }
  const MARKUP = `<p class="review-error">Not Found</p>`;

  REVIEW_CARDS.insertAdjacentHTML('beforebegin', MARKUP);
}

// реалізація свайпу

function initializeSwiper() {
    try {
        const REVIEW_SWIPER = new Swiper('.swiper', {
            direction: 'horizontal',
            autoHeight: false,
            observer: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true
            },
        
            navigation: {
                nextEl: BUTTON_NEXT,
                prevEl: BUTTON_PREV,
            },
            slidesPerView: 1,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
            }
        });
    } catch (error) {
        {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, something went wrong with reviews.',
                position: 'center',
            });
        }
    }
}