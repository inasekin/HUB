import * as flsFunctions from './modules/functions.js';
import {faqFunction} from './modules/faq.js';
import {showHero, preload, images, csaHead} from './modules/showHero.js';
import Swiper, { Navigation, Pagination } from 'swiper';
import {reasonModal} from './modules/reasonModal.js';
import {burgerOpen, quit} from './modules/burgerMenu.js';
import {ageLimitModal} from './modules/ageLimitModal.js';
import {recipeModals} from './modules/recipeModals.js';
import {mobileScripts} from './modules/mobileScripts.js';

document.body.classList.add('lock');

const btnNoAgeLimitMain = document.querySelector('.age-limit-main__no');
const btnYesAgeLimitMain = document.querySelector('.age-limit-main__yes');
const ageLimitModalMain = document.querySelector('.hero-block__age-limit');

btnNoAgeLimitMain.addEventListener('click', () => {
  window.close();
});

btnYesAgeLimitMain.addEventListener('click', (evt) => {
  evt.preventDefault();
  document.body.classList.remove('lock');
  ageLimitModalMain.classList.add('hidden');
});

mobileScripts();

faqFunction();

flsFunctions.isWebp();

recipeModals();

const mobileMenu = document.querySelector('.menu__burger');
const mobileMenuQuit = document.querySelector('.menu__quit');

mobileMenu.addEventListener('click', burgerOpen);
mobileMenuQuit.addEventListener('click', quit);

preload(images.slice(0), () => {
  requestAnimationFrame(csaHead);
});

// preload(images.slice(0), () => {
//   requestAnimationFrame(csaHead);
// });

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const swiperReasons = new Swiper('.reasons-block__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  watchOverflow: true,
  allowTouchMove: false,
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

reasonModal();
ageLimitModal();
