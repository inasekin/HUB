const heroBlockEl = document.querySelector('.hero-block');
let timeStamp = performance.now();
let index = 1;
const screenWidth = window.screen.width;
export let images = [];

if (screenWidth >= 568) {
  images[0] = './img/hero-block.png';
  images[1] = './img/hero-block-1.png';
  images[2] = './img/hero-block-2.png';
} else {
  images[0] = './img/hero-block-mobile-1.png';
  images[1] = './img/hero-block-mobile-2.png';
  images[2] = './img/hero-block-mobile-3.png';
}

export const csaHead = (arg) => {

  if(arg - timeStamp > 5000) {
    timeStamp = arg;

    if (index === 1) {
      heroBlockEl.style.backgroundImage = `url(${images[1]})`;
      index--;
    } else if (index === 0) {
      heroBlockEl.style.backgroundImage = `url(${images[0]})`;
      index = 2;
    } else if (index === 2) {
      heroBlockEl.style.backgroundImage = `url(${images[2]})`;
      index = 3;
    } else if (index === 3) {
      heroBlockEl.style.backgroundImage = `url(${images[0]})`;
      index = 1;
    }
  }
  requestAnimationFrame(csaHead);
};

export const preload = (images, callback) => {
  if (images.length) {
    const image = new Image();
    image.onload = image.onerror = function() {
      preload(images, callback);
    };
    image.src = images.pop();
  } else {
    callback();
  }
};
