import {introductions,
        regulations,
        tags,
        titles,
        backgrounds,
        illustrations,
        mobileIllustrations
} from '../utils/data.js';

export const recipeModals = () => {
  const cardTextShow = document.querySelectorAll('.btn-card-text-show');
  const hiddenTextBlock = document.querySelectorAll('.hide-block');
  const closeFullSizeModalEl = document.getElementById('closeFullSizeModal');

  const fullsizeModal = document.querySelector('.fullsize-modal');
  const btnsCardTextRead = document.querySelectorAll('.btn-card-text-read');

  //modal
  const articleHeader = document.querySelector('.recipe-article__header');
  const tagEl = document.querySelector('.tag__text');
  const titleEl = document.querySelector('.title');
  const introductionEl = document.querySelector('.article-content__introduction');
  const articleContentWrapper = document.querySelector('.article-content__wrapper');
  const articleContentIllustrations = document.querySelector('.article-content__illustrations');

  for (let i = 0; i < cardTextShow.length; i++) {
    cardTextShow[i].addEventListener("mouseover", function () {
      hiddenTextBlock[i].classList.add('active');
    });
  }

  const openFullSizeModal = (evt) => {
    evt.preventDefault();
    fullsizeModal.classList.remove('hidden');

    document.body.classList.add('lock');

    setTimeout(() => {
      const mobileIcons = document.querySelector('.mobile-icons');

      if (evt.target.dataset.id === '1') {
        mobileIcons.innerHTML = `${mobileIllustrations.mobileIllustration1}`;
      } else if (evt.target.dataset.id === '2') {
        mobileIcons.innerHTML = `${mobileIllustrations.mobileIllustration2}`;
      } else if (evt.target.dataset.id === '3') {
        mobileIcons.innerHTML = `${mobileIllustrations.mobileIllustration3}`;
      } else if (evt.target.dataset.id === '4') {
        mobileIcons.innerHTML = `${mobileIllustrations.mobileIllustration4}`;
      } else if (evt.target.dataset.id === '5') {
        mobileIcons.innerHTML = `${mobileIllustrations.mobileIllustration5}`;
      } else if (evt.target.dataset.id === '6') {
        mobileIcons.innerHTML = `${mobileIllustrations.mobileIllustration6}`;
      } else if (evt.target.dataset.id === '7') {
        mobileIcons.innerHTML = `${mobileIllustrations.mobileIllustration7}`;
      }
    }, 1000)

    switch (evt.target.dataset.id) {
      case "1":
        articleHeader.attributes[1].nodeValue = `background-image: url(${backgrounds[0]})`;
        tagEl.innerText = tags[0];
        titleEl.innerText = titles[0];
        introductionEl.innerHTML = `${introductions.introduction1}`;
        articleContentWrapper.innerHTML = `${regulations.regulations1}`;
        articleContentIllustrations.innerHTML = `${illustrations.illustration1}`;
        break
      case "2":
        articleHeader.attributes[1].nodeValue = `background-image: url(${backgrounds[1]})`;
        tagEl.innerText = tags[1];
        titleEl.innerText = titles[1];
        introductionEl.innerHTML = `${introductions.introduction2}`;
        articleContentWrapper.innerHTML = `${regulations.regulations2}`;
        articleContentIllustrations.innerHTML = `${illustrations.illustration2}`;
        break
      case "3":
        articleHeader.attributes[1].nodeValue = `background-image: url(${backgrounds[2]})`;
        tagEl.innerText = tags[2];
        titleEl.innerText = titles[2];
        introductionEl.innerHTML = `${introductions.introduction3}`;
        articleContentWrapper.innerHTML = `${regulations.regulations3}`;
        articleContentIllustrations.innerHTML = `${illustrations.illustration3}`;
        break
      case "4":
        articleHeader.attributes[1].nodeValue = `background-image: url(${backgrounds[3]})`;
        tagEl.innerText = tags[3];
        titleEl.innerText = titles[3];
        introductionEl.innerHTML = `${introductions.introduction4}`;
        articleContentWrapper.innerHTML = `${regulations.regulations4}`;
        articleContentIllustrations.innerHTML = `${illustrations.illustration4}`;
        break
      case "5":
        articleHeader.attributes[1].nodeValue = `background-image: url(${backgrounds[4]})`;
        tagEl.innerText = tags[4];
        titleEl.innerText = titles[4];
        introductionEl.innerHTML = `${introductions.introduction5}`;
        articleContentWrapper.innerHTML = `${regulations.regulations5}`;
        articleContentIllustrations.innerHTML = `${illustrations.illustration5}`;
        break
      case "6":
        articleHeader.attributes[1].nodeValue = `background-image: url(${backgrounds[5]})`;
        tagEl.innerText = tags[5];
        titleEl.innerText = titles[5];
        introductionEl.innerHTML = `${introductions.introduction6}`;
        articleContentWrapper.innerHTML = `${regulations.regulations6}`;
        articleContentIllustrations.innerHTML = `${illustrations.illustration6}`;
        break
      case "7":
        articleHeader.attributes[1].nodeValue = `background-image: url(${backgrounds[6]})`;
        tagEl.innerText = tags[6];
        titleEl.innerText = titles[6];
        introductionEl.innerHTML = `${introductions.introduction7}`;
        articleContentWrapper.innerHTML = `${regulations.regulations7}`;
        articleContentIllustrations.innerHTML = `${illustrations.illustration7}`;
        break
    }
  }

  const closeFullSizeModal = (evt) => {
    evt.preventDefault();
    fullsizeModal.classList.add('hidden');
    document.body.classList.remove('lock');
  }

  for (let i = 0; i < btnsCardTextRead.length; i++) {
    btnsCardTextRead[i].addEventListener('click', openFullSizeModal);
  }

  closeFullSizeModalEl.addEventListener('click', closeFullSizeModal);
}
