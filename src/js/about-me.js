import Accordion from 'accordion-js';

const ACCORDION = new Accordion('.about-me-accord-list', {
  duration: 350,
  elementClass: 'about-me-accord-item',
  triggerClass: 'about-me-accord-trigger',
  panelClass: 'about-me-accord-panel',
  showMultiple: false,
  onOpen: onOpenHandle,
});

ACCORDION.open(0);

setTimeout(() => {
  ACCORDION.attachEvents();
}, 1000);

function onOpenHandle(currElement) {
  const activeAcRect = currElement.getBoundingClientRect();

  const viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );

  if (activeAcRect.bottom > viewHeight) {
    window.scrollTo({
      top:
        activeAcRect.top +
        window.scrollY -
        (viewHeight - activeAcRect.height) / 2,
      behavior: 'smooth',
    });
  }
}
