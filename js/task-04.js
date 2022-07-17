let value = 0;

const counter = document.querySelector('#counter'); 
const counterValue = document.querySelector('#value');
const btnPlus = counter.lastElementChild;
const btnMinus = counter.firstElementChild;

btnPlus.addEventListener('click', () => {
    value += 1;
    counterValue.textContent = value;
});

btnMinus.addEventListener('click', () => {
    value -= 1;
    counterValue.textContent = value;
});