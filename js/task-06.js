const inputDefault = document.querySelector('#validation-input')



inputDefault.addEventListener("blur", handlerCheck)

function handlerCheck(evt) {
    if (evt.currentTarget.value.length === inputDefault.dataset.length) {
        inputDefault.classList.add('valid');
    } else {
inputDefault.classList.add('invalid');
    }
}