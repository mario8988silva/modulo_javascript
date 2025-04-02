
// 1. Criar uma pagina Web, com um H1 formatado a sua escolha e texto: “A minha Lista de Livros” :

// a) criação de h1 & chama body:
let h1 = document.createElement('h1');
let body = document.querySelector('body');

// b) adicionar valor ao h1 :
h1.textContent = 'A minha Lista de Livros';

// c) aplicar :
body.prepend(h1);

// d) chamar edição por css :
