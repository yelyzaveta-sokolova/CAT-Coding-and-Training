/*   Mobile menu   */

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-mobile-menu');
  const closeMenuBtn = document.querySelector('.js-close-mobile-menu');
  const closeMenuLink = document.querySelectorAll('.mobile-menu-link');
  const workTogetherBtn = document.querySelector('.order-btn-menu');
  const body = document.body;

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
    body.classList.toggle(
      'no-scroll',
      mobileMenu.classList.contains('is-open')
    );
  };

  closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  workTogetherBtn.addEventListener('click', toggleMenu);
})();

/*   Desktop and tablet   */

(() => {
  const desktopMenu = document.querySelector('.js-desktop-menu');
  const menuBtn = document.querySelector('.js-open-desktop-menu');
  const closeMenuLinks = desktopMenu.querySelectorAll('a');

  const toggleMenu = () => {
    const isMenuOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isMenuOpen);
    desktopMenu.classList.toggle('is-open');
  };

  menuBtn.addEventListener('click', event => {
    event.stopPropagation();
    toggleMenu();
  });

  // Close the menu when any link inside the menu is clicked
  closeMenuLinks.forEach(link =>
    link.addEventListener('click', () => {
      menuBtn.setAttribute('aria-expanded', 'false');
      desktopMenu.classList.remove('is-open');
    })
  );

  // Close the menu if clicked outside of it
  document.addEventListener('click', event => {
    if (
      !desktopMenu.contains(event.target) &&
      !menuBtn.contains(event.target)
    ) {
      menuBtn.setAttribute('aria-expanded', 'false');
      desktopMenu.classList.remove('is-open');
    }
  });
})();
