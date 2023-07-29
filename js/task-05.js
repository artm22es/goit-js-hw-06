let inputName = document.querySelector('#name-input')
let outputName = document.querySelector('#name-output')



inputName.addEventListener("input", handler)

function handler(evt) {
    if (!evt.currentTarget.value) {
        outputName.textContent = "Anonymous"
    } else {
        outputName.textContent = evt.currentTarget.value
    }
}
