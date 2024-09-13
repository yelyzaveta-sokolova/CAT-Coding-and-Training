const MENU_BTN = document.querySelector('.header-menu-link');
const MENU_LIST = document.querySelector('.header-menu-list')
const BURGER_BTN = document.querySelector('.header-burger-btn');
const BURGER_MENU = document.querySelector('.header-burger-menu');
const CLOSE_BTN = document.querySelector('.header-close-btn');
const ORDER_BTN = document.querySelector('.header-burger-order-btn');
const BURGER_MENU_LIST = document.querySelector('.header-burger-menu-list');

MENU_BTN.addEventListener('click', handleMenuClick);
BURGER_BTN.addEventListener('click', handleBurgerClick);
CLOSE_BTN.addEventListener('click', handleCloseClick);
MENU_LIST.addEventListener('click', handleMenuClick);
ORDER_BTN.addEventListener('click', handleCloseClick);
BURGER_MENU_LIST.addEventListener('click', handleCloseClick);

document.body.addEventListener('click', event => {
    if (!MENU_LIST.classList.contains('visually-hidden') && !event.target.classList.contains('header-menu-link')) {
        handleMenuClick();
    }
})

document.addEventListener('keydown', event => {
    if (event.key ==='Escape' && !MENU_LIST.classList.contains('visually-hidden')) {
        handleMenuClick();
    }
})

const DROP_DOWN_KEYFRAMES = new KeyframeEffect(
    MENU_LIST,
    [{ opacity: "0",
      transform: "translateY(-100%)"
    },
    { opacity: "1",
      transform: "translateY(0)"
    }],
    { duration: 500 });

const DROP_UP_KEY_FRAMES = new KeyframeEffect(
    MENU_LIST,
    [{ opacity: "1",
      transform: "translateY(0)"
    },
    { opacity: "0",
      transform: "translateY(-100%)"
    }],
    { duration: 500 });

const DROP_DOWN_ANIMATION = new Animation(
    DROP_DOWN_KEYFRAMES,
    document.timeline
)

const DROP_UP_ANIMATION = new Animation(
    DROP_UP_KEY_FRAMES,
    document.timeline
)

const OPEN_KEY_FRAMES = new KeyframeEffect(
    BURGER_MENU,
    [{ transform: "translateX(100%)"
    },
    { transform: "translateX(0)"
    }],
    { duration: 500 }
)

const CLOSE_KEYFRAME = new KeyframeEffect(
    BURGER_MENU,
    [{ transform: "translateX(0)"
    },
    { transform: "translateX(100%)"
    }],
    { duration: 500 }
)

const OPEN_BURGER_ANIMATION = new Animation(
    OPEN_KEY_FRAMES,
    document.timeline
)

const CLOSE_BURGER_ANIMATION = new Animation(
    CLOSE_KEYFRAME,
    document.timeline
)

function handleMenuClick() {  
    if (MENU_LIST.classList.contains('visually-hidden')) {   
        DROP_DOWN_ANIMATION.play();
        MENU_LIST.classList.remove('visually-hidden');
        return;
    }
    DROP_UP_ANIMATION.play();
    setTimeout(() => {
        MENU_LIST.classList.add('visually-hidden');
    }, 500);
}

function handleBurgerClick() {
    BURGER_MENU.classList.add('is-open-header');
    OPEN_BURGER_ANIMATION.play();
    document.body.style.overflow = 'hidden';
}

function handleCloseClick() {
    CLOSE_BURGER_ANIMATION.play();
    setTimeout(() => {
        BURGER_MENU.classList.remove('is-open-header');
    }, 500);
    document.body.style.overflow = '';
}