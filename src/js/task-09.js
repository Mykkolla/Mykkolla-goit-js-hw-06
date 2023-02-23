function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const butChangeColor = document.querySelector('.change-color');
const spanColorName = document.querySelector('.color');
const Body = document.querySelector('body');


butChangeColor.addEventListener('click', OnChangeColor);

function OnChangeColor(elem) {
  Body.style.backgroundColor = getRandomHexColor();
  spanColorName.textContent = `${Body.style.backgroundColor}`
}

