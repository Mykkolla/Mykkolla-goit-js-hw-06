
const onClickBtnIncrement = document.querySelector('[data-action="increment"]');
const onClickBtnDecrement = document.querySelector('[data-action = "decrement"]');

const Value = document.querySelector('#value');


let newValue = 0;

const ClickBtnIncrement = () => {
    newValue += 1;
    Value.textContent = newValue;
}

onClickBtnIncrement.addEventListener('click', ClickBtnIncrement);

const ClickBtnDecrement = () => {
    newValue -= 1;
    Value.textContent = newValue;
}

onClickBtnDecrement.addEventListener('click', ClickBtnDecrement);