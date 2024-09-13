const FOOTER_EL = document.querySelector('footer');
const MODAL_WINDOW = document.querySelector('.modal-window');
const MODAL_OVERLAY = document.querySelector('.modal-overlay');
const CLOSE_BTN = document.querySelector('.close-modal-btn');
const FORM = document.querySelector('.js-footer-form');
const MODAL_HEADING_EL = document.querySelector('.modal-heading');
const MODAL_TEXT_EL = document.querySelector('.modal-text');

export const OPEN_MODAL = (title, message) => {
  MODAL_HEADING_EL.textContent = title;
  MODAL_TEXT_EL.textContent = message;
  document.body.style.overflow = 'hidden';
  MODAL_WINDOW.style.display = 'block';
  MODAL_OVERLAY.style.display = 'block';
  MODAL_WINDOW.classList.add('show');
  MODAL_OVERLAY.classList.add('show');
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
  document.body.style.overflow = 'auto';
  MODAL_WINDOW.style.display = 'none';
  MODAL_OVERLAY.style.display = 'none';
};
