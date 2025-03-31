

let lista = document.querySelector('ul');

// acrescentar um li no final da lista:
// 1. criar o elemento:
let itemFim = document.createElement('li');

// 2. criar conteúdo para o elemento:
itemFim.textContent = 'Bananas';

// 3. acrescentar ao output/ adicionar à lista, neste exemplo:
lista.append(itemFim);

//

// acrescentar item ao inicio da lista:
let itemInicio = document.createElement('li');
itemInicio.textContent = 'item inicio';
// 3. adicionar item ao inicio da lista:
// variável.método(quem?, onde?);
lista.inserBefore(itemInicio, lista.firstElementChild);

lista.append('itemInicio'); // leva o primeiro item para o fim da lista.