export function reasonModal() {
  const modalReasonEl = document.querySelector('.modal-reason');
  const overlay = document.querySelector('.overlay');
  const btnCloseModal = document.querySelector('.close-modal');
  const btnsOpenModal = document.querySelectorAll('.reason-modal');
  const openReasonTextBtns = document.querySelectorAll('.open-reason-text');
  const reasonCardsTextHidden = document.querySelectorAll('.reason-card__hidden');
  const reasonCardBtnContainer = document.querySelectorAll('.reason-card__btn');
  const reasonBlockCard = document.querySelectorAll('.reasons-block__card');
  const bodyEl = document.body;

  const openModal = function (evt) {
    evt.preventDefault();
    bodyEl.classList.add('lock');
    modalReasonEl.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  const closeModal = function () {
    bodyEl.classList.remove('lock');
    modalReasonEl.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  for (let i = 0; i < openReasonTextBtns.length; i++) {
    if (window.innerWidth <= 568) {
      reasonBlockCard[i].addEventListener('click', (evt) => {
        evt.preventDefault();
        reasonCardsTextHidden[i].classList.toggle('hidden-opacity');
        openReasonTextBtns[i].classList.toggle('hidden');
      });
    } else {
      openReasonTextBtns[i].addEventListener('click', (evt) => {
        evt.preventDefault();
        reasonCardsTextHidden[i].classList.remove('hidden-opacity');
        openReasonTextBtns[i].remove();
      });
    }
  }

  for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
  }

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!modalReasonEl.classList.contains('hidden')) {
        closeModal();
      }
    }
  });
}
