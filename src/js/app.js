import * as flsFunctions from "./modules/functions.js";
import {faqFunction} from "./modules/faq.js";
import {preload, csaHead, images} from "./modules/showHero.js";
import Swiper, { Navigation, Pagination } from 'swiper';
import {reasonModal} from "./modules/reasonModal.js";

faqFunction();

flsFunctions.isWebp();

preload(images.slice(0), function() {
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
