import Swiper from 'swiper/bundle';
import "swiper/css/bundle";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const REVIEW_CARDS = document.querySelector(".js-review-cards");
const BUTTON_NEXT = document.querySelector(".swiper-button-next");
const BUTTON_PREV = document.querySelector(".swiper-button-prev");

const BASE_URL = 'https://portfolio-js.b.goit.study/api';

const GET_USERS = async () => {
    const FETCH_OPTIONS = {
        method: 'GET',
    };
    try {
        const response = await fetch(`${BASE_URL}/reviews`, FETCH_OPTIONS);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const DATA = await response.json();
        return DATA;
    } catch {
        {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, something went wrong with reviews.',
                position: 'center',
            });
        }
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
                message: 'Not found',
                position: 'center',
            });
        }
});

function renderPosts(DATA) {
    REVIEW_CARDS.innerHTML = '';
    const markup = DATA
    .map(({ author, avatar_url, review }) => {
        return `<li class="review-posts swiper-slide">
            <img class="avatar" src="${avatar_url}" alt="Avatar of ${author}">
            <h2 class="name-author">${author}</h2>
            <p class="post-body">${review}</p>
        </li>`;
    })
    .join("");
  REVIEW_CARDS.insertAdjacentHTML("beforeend", markup);
};


// // реалізація свайпу

function initializeSwiper() {
    try {
        const SWIPER = new Swiper('.swiper', {
            direction: 'horizontal',
            autoHeight: false,
            observer: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true
            },
            mousewheel: {
                sensitivity: 1,
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
                message: 'Not found',
                position: 'center',
            });
        }
    }
}

