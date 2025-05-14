let output = document.querySelector('#grid');

fetch('https://randomuser.me/api/?results=30')
.then( resp => resp.json())
.then( data => showUser(data))
.catch( () => outputtextContent = 'Ocorreu um erro'); // é de boa prática inserir uma página ou imagem erro;

function showUsers( users ){
    console.log(users);

    // faz a variável; faz users dos conteúdos da lista; filtra todos aqueles elementos cujo parametro gender seja female; 
    let femaleUsers = users.filter( user => user.gender === 'female');
    console.log(femaleUsers);

    // para cada elemento, fazer:
    femaleUsers.map( user => {

        // faz o destructuring dos parametros que nos interessam 
    let{
        picture: {large},
        name: {title, first, last},
        email,
        phone,
        location: {city, timezone: {description}}
    } = user

    output.innerHTML += `
        <article>
            <img src="${large}" />
            <h1>${title} ${first} ${last}</h1>
            <h3>${email}</h3>
            <h4>${phone}</h4>
            <p>${city}</p>
            <p>${descritpion}</p>
        </article>`
    })


}