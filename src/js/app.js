import * as flsFunctions from "./modules/functions.js";
import {faqFunction} from "./modules/faq.js";
import {preload, csaHead, images} from "./modules/showHero.js";
import Swiper, { Navigation, Pagination } from 'swiper';

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
