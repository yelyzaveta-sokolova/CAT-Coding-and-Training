import Accordion from 'accordion-js';

const ACCORDION = new Accordion('.about-me-accord-list', {
    duration: 350,
    elementClass: 'about-me-accord-item',
    triggerClass: 'about-me-accord-trigger',
    panelClass: 'about-me-accord-panel',
    showMultiple: true,
    onOpen: onOpenHandle,
    onClose: onCloseHandle,
});

ACCORDION.open(0);

setTimeout(() => {
    ACCORDION.attachEvents();
}, 1000);

function onOpenHandle(currElement) {
    const ACTIVEACRECT = currElement.getBoundingClientRect();
    const VIEW_HEIGHT = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
    );
    if (ACTIVEACRECT.bottom > VIEW_HEIGHT) {
    window.scrollTo({
        top:
        ACTIVEACRECT.top +
        window.scrollY - 
        (VIEW_HEIGHT - ACTIVEACRECT.height) / 2,
        behavior: 'smooth',
        });
    }
}

function onCloseHandle(currElement) {
}
