export const ageLimitModal = () => {
  const btnNoAgeLimit = document.querySelector('.age-limit__no');
  const btnYesAgeLimit = document.querySelector('.age-limit__yes');
  const ageLimitModal = document.querySelector('.specialist-block__age-limit');

  btnNoAgeLimit.addEventListener('click', (evt) => {
    evt.preventDefault();
    window.close();
  });

  btnYesAgeLimit.addEventListener('click', (evt) => {
    evt.preventDefault();
    ageLimitModal.classList.add('hidden');
  });
}
