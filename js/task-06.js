const inputDefault = document.querySelector('#validation-input')



inputDefault.addEventListener("blur", handlerCheck)

function handlerCheck(evt) {
    if (evt.currentTarget.value.length === Number(inputDefault.dataset.length)) {
        inputDefault.classList.remove('invalid')
        inputDefault.classList.add('valid');
    } else {
        inputDefault.classList.remove('valid')
        inputDefault.classList.add('invalid');
    }
}