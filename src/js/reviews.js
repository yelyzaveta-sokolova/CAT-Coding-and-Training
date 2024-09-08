import Swiper from 'swiper/bundle';
import "swiper/css/bundle";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const reviewCards = document.querySelector(".js-review-cards");
console.log(reviewCards);
const buttonNext = document.querySelector(".swiper-button-next");
const buttonPrev = document.querySelector(".swiper-button-prev");

const BASE_URL = 'https://portfolio-js.b.goit.study/api';

const getUsers = async () => {
    const fetchOptions = {
        method: 'GET',
    };
    try {
        const response = await fetch(`${BASE_URL}/reviews`, fetchOptions);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        return data;
    } catch {
        console.error('Error fetching users:', error);
    }
};
    getUsers()
        .then(data => {
        console.log(data);
        renderPosts(data);
        initializeSwiper();
})
.catch(error => {
    console.error('Error in getUsers:', error);
});

function renderPosts(data) {
    reviewCards.innerHTML = '';
    const markup = data
    .map(({ author, avatar_url, review }) => {
        return `<li class="review-posts swiper-slide">
            <img class="avatar" src="${avatar_url}" alt="Avatar of ${author}">
            <h2 class="name-author">${author}</h2>
            <p class="post-body">${review}</p>
        </li>`;
    })
    .join("");
  reviewCards.insertAdjacentHTML("beforeend", markup);
};


// // реалізація свайпу

async function initializeSwiper() {
    try {
        const swiper = new Swiper('.swiper', {
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
                nextEl: buttonNext,
                prevEl: buttonPrev,
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

