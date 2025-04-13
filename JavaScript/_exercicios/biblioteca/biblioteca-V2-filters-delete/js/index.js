
console.log(livros); // verifica array de livros;
console.log(filters); // verifica array de filtros;

//let grid = document.querySelector('section.grid');
let body = document.getElementsByTagName('body');
let filterContainer = document.getElementById('filterContainer');
let grid = document.getElementById('grid');




// LIVROS : 
//showBooks(livros);
showBooks(getBooks());
//showBooks(getReadBooks());
//showBooks(getNotReadBooks());

// FILTERS :
showFilters(getFilters());

// traduz para HTML os conteúdos da Array data.js > Filters :
function showFilters(arrayFilters){
    arrayFilters.map( filters => {
        filterContainer.innerHTML += `
            <button class="btn filter" id="filter ${filters.value}">${filters.value}</button>
        `;  
    })
}


// traduz para HTML os conteúdos da Array data.js > Livros :
function showBooks(arrayBooks){
    arrayBooks.map( book => {
        grid.innerHTML += `
            <article>
                <h1>${book.title}</h1>
                <h2>${book.author}</h2>
                <!-- id deveria ser o nome do ficheiro da imagem, sem a extensão -->
                <img src="livros/${book.imageUrl}" alt="${book.title}" class="bookcover" id="bookcover">
                <p>Already read: ${book.alreadyRead ? '✅' : '❌' }  </p>
                <!-- insere um botão para eliminar a devida card -->
                <button class="btn del" id="del">Delete</button>
            </article>
        `;
    })
}

// faz picture:
/*
// function para remover parte do nome do ficheiro da imagem:
function coverName(arrayBooks){}
arrayBooks.map( book => {
    let name = book.imageUrl.slice(0,-4);
});
*/

/*
// faz container + imagem: o nome do ficheiro terá de aproveitar o nome do ficheiro da imagem pequena até ao .jpg, acrescendo Gr.png
function popUp(){
    innerHTML = `
        <picture class="imgContainer" id="imgContainer">
        <img src="livros/${coverName}Gr.png" alt="nome" class="imgBig" id="imgBig">
        </picture>
    `
*/



