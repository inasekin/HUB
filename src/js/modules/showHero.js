const heroBlockEl = document.querySelector('#bg-image');
const circleImage = document.querySelector('#circle');

export const showHero = () => {

  const boxElem = document.querySelector('.hero-block');
  const pointerElem = document.getElementById('circle');

  function onMouseMove(event) {
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    const crd = boxElem.getBoundingClientRect();
    const activePointer = crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom;

    requestAnimationFrame(() => {
      if (activePointer) {
        pointerElem.classList.remove('box-pointer-hidden');
        pointerElem.style.left = `${Math.floor(mouseX) - 100 }px`;
        pointerElem.style.top = `${Math.floor(mouseY) - 100 }px`;
      } else {
        pointerElem.classList.add('box-pointer-hidden');
      }
    });
  }

  function disablePointer() {
    requestAnimationFrame(() => {
      pointerElem.classList.add('box-pointer-hidden');
    });
  }

  boxElem.addEventListener('mousemove', onMouseMove, false);
  boxElem.addEventListener('mouseleave', disablePointer, false);
  circleImage.style.border = '2px solid #FE9D2B';
};

let timeStamp = performance.now();
let index = 1;
const screenWidth = window.screen.width;
export const images = [];

if (screenWidth >= 568) {
  images[0] = './img/hero-block-0.png';
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
      circleImage.style.backgroundImage = `url(${images[0]})`;
      index--;
    } else if (index === 0) {
      heroBlockEl.style.backgroundImage = `url(${images[0]})`;
      circleImage.style.backgroundImage = `url(${images[1]})`;
      index = 2;
    } else if (index === 2) {
      heroBlockEl.style.backgroundImage = `url(${images[2]})`;
      circleImage.style.backgroundImage = `url(${images[1]})`;
      index = 3;
    } else if (index === 3) {
      heroBlockEl.style.backgroundImage = `url(${images[0]})`;
      circleImage.style.backgroundImage = `url(${images[2]})`;
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
