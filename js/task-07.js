const slider = document.querySelector('#font-size-control')
let text = document.querySelector('#text')


slider.addEventListener('input', handlerFontSize)

function handlerFontSize(evt) {
   text.style.fontSize = evt.currentTarget.value + "px"
}