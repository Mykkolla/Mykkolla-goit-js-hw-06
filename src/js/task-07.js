const imput = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

imput.addEventListener('input', handlerchangetextSpan);
textSpan.style.fontSize = `${imput.value}px`;


function handlerchangetextSpan (element) {
textSpan.style.fontSize = `${element.currentTarget.value}px`;
};


// another variant

// function changetextSpan () {
// textSpan.style.fontSize = `${imput.value}px`;
// };

