export function reasonModal() {
  const modalReasonEl = document.querySelector('.modal-reason');
  const overlay = document.querySelector('.overlay');
  const btnCloseModal = document.querySelector('.close-modal');
  const btnsOpenModal = document.querySelectorAll('.reason-modal');
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

  for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (!modalReasonEl.classList.contains('hidden')) {
        closeModal();
      }
    }
  });
}
