
// método ler todos os livros:
const getBooks = () => livros;

// método para mostrar livros já lidos:
// o filter faz uma array baseada na array livros (da variável book, faz uma array de elementos cujo valor seja x):
const getReadBooks = () => livros.filter( livro => livro.alreadyRead === true);


const getNotReadBooks = () => livros.filter( livro => livro.alreadyRead === false);