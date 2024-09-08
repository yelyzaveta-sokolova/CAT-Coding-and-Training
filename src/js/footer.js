import axios from 'axios';
import iziToast from 'izitoast';

const FORM_EL = document.querySelector('.js-footer-form');
const USER_EMAIL_EL = document.querySelector('.js-footer-form-input');
const MESSAGE_OUTPUT_EL = document.querySelector('.js-message');

let formData = {
  email: '',
  comment: '',
};

const EMAIL_PATTERN = new RegExp(USER_EMAIL_EL.getAttribute('pattern'));

const UPDATE_MESSAGE = (message, color) => {
  MESSAGE_OUTPUT_EL.textContent = message;
  MESSAGE_OUTPUT_EL.style.color = color;
  MESSAGE_OUTPUT_EL.classList.remove('is-hidden');
};

const HIDE_MESSAGE = () => {
  MESSAGE_OUTPUT_EL.classList.add('is-hidden');
  USER_EMAIL_EL.style.borderColor = 'rgba(250, 250, 250, 0.2)';
};

const ON_USER_EMAIL_INPUT = () => {
  const USER_EMAIL_VALUE = USER_EMAIL_EL.value.trim();

  if (USER_EMAIL_VALUE === '') {
    HIDE_MESSAGE();
    return;
  }

  if (!EMAIL_PATTERN.test(USER_EMAIL_VALUE)) {
    UPDATE_MESSAGE('Invalid email, try again', '#E74A3B');
    USER_EMAIL_EL.style.borderBottom = '1px solid #E74A3B';
  } else {
    UPDATE_MESSAGE('Success!', '#3CBC81');
    USER_EMAIL_EL.style.borderBottom = '1px solid #3CBC81';
  }
};

USER_EMAIL_EL.addEventListener('input', ON_USER_EMAIL_INPUT);

const FILL_FORM_FIELDS = () => {
  const FORM_DATA_FROM_LS = JSON.parse(
    localStorage.getItem('comment-form') || '{}'
  );

  formData = FORM_DATA_FROM_LS;

  Object.keys(formData).forEach(key => {
    if (FORM_EL.elements[key]) {
      FORM_EL.elements[key].value = formData[key];
    }
  });

  ON_USER_EMAIL_INPUT();
};

FILL_FORM_FIELDS();

const ON_FORM_FIELD_INPUT = event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('comment-form', JSON.stringify(formData));
};

FORM_EL.addEventListener('input', ON_FORM_FIELD_INPUT);

const ON_SEND_FORM_DATA = async event => {
  event.preventDefault();

  const API_URL = 'https://portfolio-js.b.goit.study/api/requests/';

  try {
    const response = await axios.post(API_URL, {
      email: formData.email,
      comment: formData.comment,
    });
    console.log(response);
    FORM_EL.reset();
    localStorage.removeItem('comment-form');
    HIDE_MESSAGE();
    // MODAL.classList.remove('is-hidden');
    // OVARLAY.classList.remove('is-hidden');
  } catch (err) {
    iziToast.error({
      title: 'Error:',
      message: 'Error sending request. Try again.',
    });
  }
};

FORM_EL.addEventListener('submit', ON_SEND_FORM_DATA);
