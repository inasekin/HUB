export const burgerOpen = () => {
  const burger = document.getElementById('burger');
  const links = document.getElementById('links');
  const quit = document.getElementById('quit');
  burger.style.padding = '16px 16px 200vw 200vw';
  links.style.display = 'flex';
  quit.style.display = 'inline';
  document.body.classList.add('lock');
  burger.classList.add('background');
}

export const quit = () => {
  const burger = document.getElementById('burger');
  const links = document.getElementById('links');
  const quit = document.getElementById('quit');
  burger.style.padding = '0';
  links.style.display = 'none';
  quit.style.display = 'none';
  document.body.classList.remove('lock');
  burger.classList.remove('background');
}
