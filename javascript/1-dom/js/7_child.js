

let lista = document.querySelector('ul');
let items = document.querySelectorAll('li');


let primeiroItem = lista.firstElementChild;
primeiroItem.className = 'cool';

let ultimoItem = lista.lastElementChild;
ultimoItem.className = 'complete';