
// Query selector & Query Selector All:
// a classe do seleccionador tem de ser css, ou caminho css:

// seleccionar UM elemento (UMA ocorrência):
let itemHot = document.querySelector('ul li.hot');
console.log(itemHot);

itemHot.className = 'cool';

// seleccionar uma lista/Vários elementos:
let itemsHot = document.querySelectorAll('.hot');
console.log(itemsHot);
itemsHot[0].className = 'complete';