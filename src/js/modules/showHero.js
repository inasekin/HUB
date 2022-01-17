const heroBlockEl = document.querySelector('.hero-block');
let timeStamp = performance.now();
let index = 1;

export const images = [
  './img/hero-block.png',
  './img/hero-block-1.png',
  './img/hero-block-2.png'
];

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
    let image = new Image();
    image.onload = image.onerror = function() {
      preload(images, callback);
    }
    image.src = images.pop();
  } else {
    callback();
  }
}
