// Livros :

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

let livrosNaoLidos = [
   
    {
        title: 'Blockchain com JS',
        author: "Bina Ramamurthy",
        alreadyRead: false,
        imageUrl: 'blockchain.jpg',
    },
   
    {
        title: 'Joy Of Javascript',
        author: "Luis Ascencio",
        alreadyRead: false,
        imageUrl: 'joj.jpg',
    },    
];

// Filtros :
let filters = [
    {value: 'Lidos'},
    {value: 'Por Ler'},
    {value: 'Todos'},
    {value: 'Título'},
    {value: 'Autor'},
]