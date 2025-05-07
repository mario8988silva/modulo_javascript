let output = document.querySelector('#output');

fetch('pessoa.json') // chama o ficheiro .json, neste caso, localmente
    .then( resp => resp.json() ) //transforma os dados do ficheiro .json para um objecto de JS
    .then( data => { // faz deste conteúdo extraído uma variável
        console.log(data); // que podemos apresentar ao utilizador
        output.innerHTML = `
        <h2> ${data.nome} ${data.apelido}</h2>
        <p>${data.pais}</p>
        `;
    })
    .catch( () => output.textContent = 'Ocorreu um erro, tente mais tarde'); // o catch serve para situações de erro