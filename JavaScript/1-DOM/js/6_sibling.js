
// chegar aos elementos por meio de parentes:

let item2 = document.querySelector('#two');

// seleccionar o item anterior ao mencionado:
let itemAnterior = item2.previousElementSibling; // selecciona o elemento antes do elemento invocado;
// let itemAnterior = item2.previousSibling; // selecciona aquilo que estiver antes do elemento invocado (isto inclui white space, por exemplo);
itemAnterior.className = 'cool';

// seleccionar o item seguinte ao mencionado:
let itemSeguinte = item2.nextElementSibling;
itemSeguinte.className = 'complete';