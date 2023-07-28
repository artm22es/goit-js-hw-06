let inputName = document.querySelector('#name-input')
let outputName = document.querySelector('#name-output')



inputName.addEventListener("input", handler)

function handler(evt) {
    outputName.textContent = evt.currentTarget.value
}
