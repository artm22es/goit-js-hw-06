const list = document.querySelector('#categories')
console.log(`Number of categories: ${list.children.length}`);

[...list.children].forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
})