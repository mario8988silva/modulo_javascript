
// 1. Criar uma pagina Web, com um H1 formatado a sua escolha e texto: “A minha Lista de Livros” :

// criação de h1 & chama body:
let texto = '';

let body = document.querySelector('body');

let h1 = document.createElement('h1');
let main = document.createElement('main');
let article = document.createElement('article');
let artH1 = document.createElement('h1');
let artH2 = document.createElement('h2');
let artImg = document.createElement('img');
let artH3 = document.createElement('h3');

// aplica estilos:
main.classList.add('layout');
article.classList.add('thumb');
artH1.classList.add('title');
artH2.classList.add('author');

artH3.classList.add('read');

// array :
let livros = [
    {
        title: 'Angular Com Typescript',
        author: "Yakov Fain",
        alreadyRead: true,
        imageUrl: 'livros/angular.jpg',
    },
    {
        title: 'Blockchain com JS',
        author: "Bina Ramamurthy",
        alreadyRead: false,
        imageUrl: 'livros/blockchain.jpg',
    },
    {
        title: 'Deep Learning com JS',
        author: "Various Authors",
        alreadyRead: true,
        imageUrl: 'livros/deeplearning.jpg',
    },
    {
        title: 'Joy Of Javascript',
        author: "Luis Ascencio",
        alreadyRead: false,
        imageUrl: 'livros/joj.jpg',
    },
    {
        title: 'React Hooks in Action',
        author: "John Larsen",
        alreadyRead: true,
        imageUrl: 'livros/reacthooks.jpg',
    },
]; console.log(livros);

// function com estrutura html:
/*
function estruturaThumb(){
    texto += `<article>`;
    texto += `<h1>${livros.title}</h1>`;
    texto += `<h2>${livros.author}</h2>`;
    texto += `<img src="livros/${livros.imageUrl}">`;
    texto += `<h3>Already Read: ${livros.alreadyRead}</h3>`;
    texto += `</article>`;
}; console.log(estruturaThumb);
*/
/*
function estruturaThumb(){
    for(const livro of livros){
        let article = document.createElement('article');
        let artH1 = document.createElement('h1');
        let artH2 = document.createElement('h1');
        let artH3 = document.createElement('h1');
        let img = document.createElement('h1');
        let closeArticle = document.createElement('h1');
        
    };

    texto += `<article>`;
    texto += `<h1>${livros.title}</h1>`;
    texto += `<h2>${livros.author}</h2>`;
    texto += `<img src="livros/${livros.imageUrl}">`;
    texto += `<h3>Already Read: ${livros.alreadyRead}</h3>`;
    texto += `</article>`;
}; console.log(estruturaThumb);
*/

// adicionar valor ao h1 :
h1.textContent = 'A minha Biblioteca de Livros';

//testes: 
texto += `x`;
// adicionar valor ao thumb:
//thumb.textContent = livros;

// aplicar :
body.prepend(h1);
let outpMain = body.append(main);
/*
let outpArticle = main.append(article);
let outpArtH1 = article.append(artH1);
let outpArtH2 = article.append(artH2);
let outpArtImg = article.append(artImg);
let outpArtH3 = article.append(artH3);
*/
// faz loop:
/*
for (let livro of livros) {
    texto += `
    <h3>Aluno: ${livro.title}</h3>
    `;            
}

//body.prepend(livros);

// output:
/*
for (let livro of livros) {
    texto += 'ola';            
}
*/
let output = document.getElementById('output');        
output.innerHTML = texto;
