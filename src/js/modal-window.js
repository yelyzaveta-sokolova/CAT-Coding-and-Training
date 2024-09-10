import iziToast from 'izitoast';

const FOOTER_EL = document.querySelector('footer');
const MODAL_WINDOW = document.querySelector('.modal-window');
const MODAL_OVERLAY = document.querySelector('.modal-overlay');
const CLOSE_BTN = document.querySelector('.close-modal-btn');
const FORM = document.querySelector('.js-footer-form');

export const OPEN_MODAL = () => {
  MODAL_WINDOW.style.display = 'block';
  MODAL_OVERLAY.style.display = 'block';

  setTimeout(() => {
    MODAL_WINDOW.classList.add('show');
    MODAL_OVERLAY.classList.add('show');
  }, 10);
};

CLOSE_BTN.onclick = function () {
  CLOSE_MODAL();
};

window.onclick = function (event) {
  if (event.target == MODAL_OVERLAY) {
    CLOSE_MODAL();
    FORM.reset();
  }
};

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    CLOSE_MODAL();
  }
});

CLOSE_BTN.addEventListener('click', () => {
  FORM.reset();
});

export const CLOSE_MODAL = () => {
  MODAL_WINDOW.classList.remove('show');
  MODAL_OVERLAY.classList.remove('show');

  setTimeout(() => {
    MODAL_WINDOW.style.display = 'none';
    MODAL_OVERLAY.style.display = 'none';
  }, 1000);
};

const CHECK_SCROLL_POSITION = () => {
  const footerRect = FOOTER_EL.getBoundingClientRect();

  if (footerRect.top < window.innerHeight) {
    MODAL_WINDOW.style.display = 'none';
    MODAL_OVERLAY.style.display = 'none';
  }
};

window.addEventListener('scroll', CHECK_SCROLL_POSITION);
