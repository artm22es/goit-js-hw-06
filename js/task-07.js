const slider = document.querySelector('#font-size-control')
let text = document.querySelector('#text')

text.style.fontSize = `${slider.value}px`
slider.addEventListener('input', handlerFontSize)

function handlerFontSize(evt) {
   text.style.fontSize = evt.currentTarget.value + "px"
}