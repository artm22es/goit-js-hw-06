const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



function createMarkup(arr) {
  arr.map(item => {
    const list = document.querySelector('#ingredients')
    const li = document.createElement('li')
    li.textContent = item;
    li.classList.add('item');
    list.append(li);
  })
}
createMarkup(ingredients);
