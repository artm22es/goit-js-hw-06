const color = document.querySelector('.color')
const btn = document.querySelector('.change-color')

btn.addEventListener('click', handlerColor)

function handlerColor() {
  document.body.style.backgroundColor = getRandomHexColor();
color.textContent = document.body.style.backgroundColor
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
