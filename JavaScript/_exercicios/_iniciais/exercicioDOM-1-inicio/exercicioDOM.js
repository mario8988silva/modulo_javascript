/*
1 - Acrescentar um novo item no inicio e no final da lista
2 - aplicar a class "cool" a todos os itens da lista
3 - Acrescentar uma tag "span" dentro do "h2", com o numero de itens da lista
*/


// 1 - Acrescentar um novo item no inicio e no final da lista :
// a. seleciona a ul
let ul = document.querySelector('ul');

// b. criar os elementos:
let itemPrimeiro = document.createElement('li');
let itemUltimo = document.createElement('li');

// c. criar conteúdo/valor para os elementos:
itemPrimeiro.textContent = 'INÍCIO';
itemUltimo.textContent = 'ÚLTIMO';

// d. acrescentar ao output/ adicionar à lista, neste exemplo:
ul.prepend(itemPrimeiro, ul.firstElementChild);
ul.append(itemUltimo);


// 2 - aplicar a class "cool" a todos os itens da lista :
// a. criação de variável que selecciona todos os li
let items = document.querySelectorAll('li');

// b. atribui a classe "cool" aos elementos atribuídos a esta variável criada :
for (const item of items) {
    item.className = 'cool';    
}
// ou
for (const item of ul.children) {
    item.className = 'cool';      
}


// 3 - Acrescentar uma tag "span" dentro do "h2", com o numero de itens da lista :
// a. faz a variável do span:
let span = document.createElement('span');

// b. adiciona a quantidade de conteúdos/filhos existentes na ul existente no ficheiro html:
span.textContent = ul.children.length;

// c. a variável span é adicionada ao elemento existente previamente à ul: 
ul.previousElementSibling.append(span);
