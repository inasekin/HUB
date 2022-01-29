import * as flsFunctions from './modules/functions.js';
import {faqFunction} from './modules/faq.js';
import {preload, csaHead, images} from './modules/showHero.js';
import Swiper, { Navigation, Pagination } from 'swiper';
import {reasonModal} from './modules/reasonModal.js';
import {burgerOpen, quit} from './modules/burgerMenu.js';
import {ageLimitModal} from './modules/ageLimitModal.js';
import {recipeModals} from './modules/recipeModals.js';

const spotlight = document.querySelector('.hero-block__spotlight');

let spotlightSize = 'transparent 160px, rgba(168, 15, 50, 1) 200px)';

window.addEventListener('mousemove', (e) => updateSpotlight(e));

window.addEventListener('mousedown', (e) => {
  spotlightSize = 'transparent 130px, rgba(168, 15, 50, 0.95) 150px)';
  updateSpotlight(e);
});

window.addEventListener('mouseup', (e) => {
  spotlightSize = 'transparent 160px, rgba(168, 15, 50, 0.85) 200px)';
  updateSpotlight(e);
});

function updateSpotlight(e) {
  spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
}

faqFunction();

flsFunctions.isWebp();

recipeModals();

const mobileMenu = document.querySelector('.menu__burger');
const mobileMenuQuit = document.querySelector('.menu__quit');
// const heroBlockText = document.querySelector('.hero-block__text');
// const heroBlock = document.querySelector('.hero-block');
// const heroBlockTitle = document.querySelector('.hero-block__title');

// setInterval(() => {
//   if (heroBlock.attributes[1].nodeValue === 'background-image: url("./img/hero-block-mobile-2.png");' || heroBlock.attributes[1].nodeValue === 'background-image: url("./img/hero-block-mobile-3.png");') {
//     heroBlockText.classList.add('hidden');
//     heroBlockTitle.classList.add('mt-100');
//   } else {
//     heroBlockText.classList.remove('hidden');
//     heroBlockTitle.classList.remove('mt-100');
//   }
// }, 5500);

mobileMenu.addEventListener('click', burgerOpen);
mobileMenuQuit.addEventListener('click', quit);

preload(images.slice(0), () => {
  requestAnimationFrame(csaHead);
});

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const swiperReasons = new Swiper('.reasons-block__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  watchOverflow: true,
  allowTouchMove: true,
  slidesPerGroup: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },
});

const swiperModalReasons = new Swiper('.modal-reason__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  watchOverflow: true,
  allowTouchMove: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-navigation__next',
    prevEl: '.slider-navigation__prev',
  },
});

reasonModal();
ageLimitModal();
