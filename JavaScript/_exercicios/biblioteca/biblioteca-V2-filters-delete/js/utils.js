/*  Bilioteca-2
 1 - acrescentar uma seccao,  de filtros, para poder filtrar por ja lidos, nao lidos, todos, e por titulo ou autor do livro
 2 - dentro de cada card, acrescentar um botao de delete, para apagar o respectivo livro
 3 - ao clicar no thumbnail mostrar popup
*/


/// metodo ler TODOS os livros
const getBooks = () => livros;

// metodo para mostrar livros ja LIDOS
const getReadBooks = () => livros.filter( livro => livro.alreadyRead === true);

// metodo para mostrar livros POR LER
const getNotReadBooks = () => livros.filter( livro => livro.alreadyRead === false);

// metodo para mostrar livros por TITULO
/*
const getBooksByTitle = () => livros.filter( livro => livro.title === x});
*/

/*
const getBooksByAuthor = () => livros.filter( livro => livro.author === x});
*/

// filtros :
const getFilters = () => filters;



// ******************************************** //

