function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const background = document.querySelector('body');
const colorHex = document.querySelector('.color')
const btn = document.querySelector('.change-color');

btn.addEventListener('click', (e) => {
  colorHex.textContent = `${getRandomHexColor()}`;
  background.style.backgroundColor = `${getRandomHexColor()}`;
})  