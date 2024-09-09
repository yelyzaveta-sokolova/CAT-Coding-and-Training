const SEND_BTN = document.querySelector('.js-footer-form-btn');
const MODAL_WINDOW = document.querySelector('.modal-window');
const MODAL_OVERLAY = document.querySelector('.modal-overlay');
const CLOSE_BTN = document.querySelector('.close-modal-btn');
const FORM = document.querySelector('.js-footer-form');

SEND_BTN.onclick = function(event) {
    event.preventDefault();

    MODAL_WINDOW.style.display = 'block';
    MODAL_OVERLAY.style.display = 'block';

    setTimeout(() => {
        MODAL_WINDOW.classList.add('show');
        MODAL_OVERLAY.classList.add('show');
    }, 10);
};

CLOSE_BTN.onclick = function() {
    closeModal();
};

window.onclick = function(event) {
    if (event.target == MODAL_OVERLAY) {
        closeModal();
        FORM.reset();
    }
};

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

CLOSE_BTN.addEventListener('click', () => {
    FORM.reset();
});

function closeModal() {
    MODAL_WINDOW.classList.remove('show');
    MODAL_OVERLAY.classList.remove('show');

    setTimeout(() => {
        MODAL_WINDOW.style.display = 'none';
        MODAL_OVERLAY.style.display = 'none';
    }, 1000);
}