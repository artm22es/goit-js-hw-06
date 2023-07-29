let counterValue = 0;

const value = document.querySelector('#value');
const decrease = value.previousElementSibling;
const increase = value.nextElementSibling;

decrease.addEventListener('click', handlerRem);
increase.addEventListener('click', handlerAdd);

function handlerRem() {
    counterValue -= 1;
    value.textContent = counterValue
}

function handlerAdd() {
    counterValue += 1
    value.textContent = counterValue
}