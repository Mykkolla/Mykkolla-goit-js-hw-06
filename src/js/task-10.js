function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divInput = document.querySelector('#controls');
const BtnCreate = document.querySelector('[data-create]');
const BtnDestroy = document.querySelector('[data-destroy]');
const Input= document.querySelector('input');
const Boxes= document.querySelector('#boxes');



const handleCreatAr = () => {
  for (let i = 0; i < Input.value; i += 1) {
    
    const newDiv = document.createElement('div');
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.background = getRandomHexColor();

  Boxes.appendChild(newDiv);
  };
}

function destroyBox() {

  while (Boxes.firstChild) {
    Boxes.removeChild(Boxes.firstChild);
  }
}

BtnCreate.addEventListener('click', handleCreatAr);

BtnDestroy.addEventListener('click', destroyBox);


// let size = 30;
//   const boxesArr = [];
//   for (let i = 0; i < amount; i += 1) {
//     size += 10 * i;
//     const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
//     boxesArr.push(div);
//   }
//   divBoxesEl.insertAdjacentHTML('beforeend', boxesArr.join(''));
// }
