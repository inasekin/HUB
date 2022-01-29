export const mobileScripts = () => {
  const recipeBlockCard = document.querySelectorAll('.recipe-block__card');
  const recipeBlockHiddenBlock = document.querySelectorAll('.hide-block');

  for (let i = 0; i < recipeBlockCard.length; i++) {
    recipeBlockCard[i].addEventListener('click', () => {
      recipeBlockHiddenBlock[i].classList.toggle('active-block');
    });
  }
};
