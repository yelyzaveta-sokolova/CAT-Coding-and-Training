const scrollBtn = document.querySelector('.is-btnshow');
window.onscroll = () => {
  if (window.scrollY > 5) {
    scrollBtn.classList.remove('is-btnshow-hide');
  } else {
    scrollBtn.classList.add('is-btnshow-hide');
  }

  scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
  };
};