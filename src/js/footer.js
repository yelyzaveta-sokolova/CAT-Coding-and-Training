import axios from 'axios';
import iziToast from 'izitoast';
import { OPEN_MODAL } from './modal-window';

const FORM_EL = document.querySelector('.js-footer-form');
const USER_EMAIL_EL = document.querySelector('.js-footer-form-input');
const USER_COMMENT_EL = document.querySelector('.js-comment');
const MESSAGE_OUTPUT_EL = document.querySelector('.js-message');

let formData = {
  email: '',
  comment: '',
};

const UPDATE_MESSAGE = (message, inputClass, messageClass) => {
  USER_EMAIL_EL.classList.remove('error', 'success');
  USER_EMAIL_EL.classList.add(inputClass);

  MESSAGE_OUTPUT_EL.textContent = message;
  MESSAGE_OUTPUT_EL.classList.remove('error', 'success');
  MESSAGE_OUTPUT_EL.classList.add(messageClass);
  MESSAGE_OUTPUT_EL.classList.remove('is-hidden');
};

const ON_USER_EMAIL_INPUT = () => {
  const emailValue = USER_EMAIL_EL.value.trim();

  if (emailValue === '') {
    USER_EMAIL_EL.classList.remove('error', 'success');
    MESSAGE_OUTPUT_EL.textContent = '';
    MESSAGE_OUTPUT_EL.classList.add('is-hidden');
  } else if (USER_EMAIL_EL.checkValidity()) {
    UPDATE_MESSAGE('Success!', 'success', 'success');
  } else {
    UPDATE_MESSAGE('Invalid email, try again!', 'error', 'error');
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

  if (
    USER_EMAIL_EL.value.trim() === '' ||
    USER_COMMENT_EL.value.trim() === ''
  ) {
    iziToast.error({
      title: 'Error:',
      message: 'Please fill in the input fields',
    });
    return;
  }

  const API_URL = 'https://portfolio-js.b.goit.study/api/requests/';

  try {
    const response = await axios.post(API_URL, {
      email: formData.email,
      comment: formData.comment,
    });
    console.log(response);
    FORM_EL.reset();
    localStorage.removeItem('comment-form');
    OPEN_MODAL();
    USER_EMAIL_EL.classList.remove('error', 'success');
    MESSAGE_OUTPUT_EL.classList.add('is-hidden');
  } catch (err) {
    iziToast.error({
      title: 'Error:',
      message: 'Error sending request. Try again.',
    });
  }
};

FORM_EL.addEventListener('submit', ON_SEND_FORM_DATA);
