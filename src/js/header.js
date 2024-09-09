/*   Mobile menu   */
(() => {
  const MOBILE_MENU = document.querySelector('.js-menu-container');
  const OPEN_MENU_BTN = document.querySelector('.js-open-mobile-menu');
  const CLOSE_MENU_BTN = document.querySelector('.js-close-mobile-menu');
  const CLOSE_MENU_LINKS = document.querySelectorAll('.mobile-menu-link');
  const ORDER_BTN = document.querySelector('.order-btn-menu');
  const BODY = document.body;

  const TOGGLE_MENU = () => {
    const IS_MENU_OPEN = MOBILE_MENU.classList.contains('is-open');
    MOBILE_MENU.classList.toggle('is-open');
    OPEN_MENU_BTN.setAttribute('aria-expanded', !IS_MENU_OPEN);
    BODY.classList.toggle('no-scroll', !IS_MENU_OPEN);
  };

  CLOSE_MENU_LINKS.forEach(link => link.addEventListener('click', TOGGLE_MENU));
  OPEN_MENU_BTN.addEventListener('click', TOGGLE_MENU);
  CLOSE_MENU_BTN.addEventListener('click', TOGGLE_MENU);
  ORDER_BTN.addEventListener('click', TOGGLE_MENU);
})();

/*   Desktop and tablet menu   */
(() => {
  const DESKTOP_MENU = document.querySelector('.js-desktop-menu');
  const MENU_BTN = document.querySelector('.js-open-desktop-menu');
  const CLOSE_MENU_LINKS = DESKTOP_MENU.querySelectorAll('a');

  const TOGGLE_MENU = () => {
    const IS_MENU_OPEN = MENU_BTN.getAttribute('aria-expanded') === 'true';
    MENU_BTN.setAttribute('aria-expanded', !IS_MENU_OPEN);
    DESKTOP_MENU.classList.toggle('is-open');
  };

  MENU_BTN.addEventListener('click', event => {
    event.stopPropagation();
    TOGGLE_MENU();
  });

  CLOSE_MENU_LINKS.forEach(link =>
    link.addEventListener('click', () => {
      MENU_BTN.setAttribute('aria-expanded', 'false');
      DESKTOP_MENU.classList.remove('is-open');
    })
  );

  document.addEventListener('click', event => {
    if (
      !DESKTOP_MENU.contains(event.target) &&
      !MENU_BTN.contains(event.target)
    ) {
      MENU_BTN.setAttribute('aria-expanded', 'false');
      DESKTOP_MENU.classList.remove('is-open');
    }
  });
})();
