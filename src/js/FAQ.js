import Accordion from 'accordion-js';

  document.addEventListener("DOMContentLoaded", function () {
    new Accordion('.accordion-container', {
      duration: 600,
      showMultiple: true,
    });
  });