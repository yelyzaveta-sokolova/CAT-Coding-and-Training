import Accordion from 'accordion-js';

 document.addEventListener("DOMContentLoaded", function () {
   new Accordion('.about-me-accord-list',{
  duration: 600,
  elementClass: 'about-me-accord-item',
  triggerClass: 'about-me-accord-trigger',
  panelClass: 'about-me-accord-panel',
  showMultiple: true,
  openOnInit: [0],
   });
  });
// ACCORDION.open(0);

// setTimeout(() => {
//   ACCORDION.attachEvents();
// }, 1000);

// function onOpenHandle(currElement) {
//   const ACTIVEACRECT = currElement.getBoundingClientRect();

//   const viewHeight = Math.max(
//     document.documentElement.clientHeight,
//     window.innerHeight
//   );

//   if (ACTIVEACRECT.bottom > viewHeight) {
//     window.scrollTo({
//       top:
//         ACTIVEACRECT.top +
//         window.scrollY -
//         (viewHeight - ACTIVEACRECT.height) / 2,
//       behavior: 'smooth',
//     });
//   }
