
// faz variável para seleccionar determinado elemento:
let item2 = document.querySelector('#two');

//
item2.setAttribute('class', 'cool');

//
if (item2.hasAttribute('class')){
    // identifica na consola qual o valor da propriedade:
    console.log(item2.getAttribute('class'));
}

// remove 
item2.removeAttribute('class');

/*
item2.className = 'cool';
item2.className = 'cool complete';
*/

item2.classList.add('cool'); // adiciona valor, não faz nada, dado que já existe;
item2.classList.add('xpto'); // adiciona valor;
item2.classList.remove('xpto'); // remove valor;
item2.classList.toggle('xpto2'); // outra tecnica : aqui adiciona um novo valor;
item2.classList.toggle('xpto2'); // aqui desliga o valor previamente criado;