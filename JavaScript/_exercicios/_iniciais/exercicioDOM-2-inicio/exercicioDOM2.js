
// 1. Criar uma pagina Web, com um H1 formatado a sua escolha e texto: “A minha Lista de Livros” :

// criação de h1 & chama body:
let body = document.querySelector('body');
let h1 = document.createElement('h1');
let thumb = document.createElement('div');

let texto = '';



// array :
let livros = [
    {
        title: 'Angular Com Typescript',
        author: "Yakov Fain",
        alreadyRead: true,
        imageUrl: 'angular.jpg',
    },
    {
        title: 'Blockchain com JS',
        author: "Bina Ramamurthy",
        alreadyRead: false,
        imageUrl: 'blockchain.jpg',
    },
    {
        title: 'Deep Learning com JS',
        author: "Various Authors",
        alreadyRead: true,
        imageUrl: 'deeplearning.jpg',
    },
    {
        title: 'Joy Of Javascript',
        author: "Luis Ascencio",
        alreadyRead: false,
        imageUrl: 'joj.jpg',
    },
    {
        title: 'React Hooks in Action',
        author: "John Larsen",
        alreadyRead: true,
        imageUrl: 'reacthooks.jpg',
    },
];

console.log(livros);


// adicionar valor ao h1 :
h1.textContent = 'A minha Biblioteca de Livros';
// adicionar valor ao thumb:
thumb.textContent = livros;


// aplicar :
body.prepend(h1);
body.prepend(livros);

// output:
/*
for (let livro of livros) {
    texto += 'ola';            
}

let output = document.getElementById('output');
output.innerHTML = texto;
*/