let output = document.querySelector('#output');

fetch('https://jsonplaceholder.typicode.com/users')//chama os dados dispostos num ficheiro disposto na web
    .catch(() => output.textContent = "erro na chamada")
    .then(response => response.json())//transforma os dados do ficheiro .json num objecto JS
    .catch(() => output.textContent = "erro na transformação do ficheiro")
    .then( data => mostrarUsers(data))//faz variável com esses dados recolhidos deste novo objecto, dependente do .json
    .catch(() => output.textContent = "Ocorreu um erro de Comunicação");

    function mostrarUsers(users){
        console.log(users);
        users.map(user => {
            //faz o destruturing dos dados necessários
            // x:{y} chama o y dentro do x
            // x:y muda o nome de x para y
            let{name, email, address:{city}, website:site} = user;

            output.innerHTML += `
            <article>
                <h2> ${name} </h2>
                <p> ${email} </p>
                <p> ${city} </p>
                <p> ${site} </p>
            </article>
            <hr>
            <br>
            `
        })
    }