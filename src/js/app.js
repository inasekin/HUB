import * as flsFunctions from "./modules/functions.js";
import {faqFunction} from "./modules/faq.js";
import {preload, csaHead, images} from "./modules/showHero.js";

preload(images.slice(0), function() {
  requestAnimationFrame(csaHead);
});

faqFunction();

flsFunctions.isWebp();



/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/
