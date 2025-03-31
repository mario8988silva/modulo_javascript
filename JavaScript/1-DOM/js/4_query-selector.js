
// Query selector & Query Selector All:
// a classe do seleccionador tem de ser css, ou caminho css:

// seleccionar UM elemento (UMA ocorrência):
// faz apenas uma chamada/ uma actualização:
let itemHot = document.querySelector('ul li.hot');
console.log(itemHot);

itemHot.className = 'cool';

// seleccionar uma lista/Vários elementos:
// está constantemente a actualizar:
let itemsHot = document.querySelectorAll('.hot');
console.log(itemsHot);
itemsHot[0].className = 'complete';