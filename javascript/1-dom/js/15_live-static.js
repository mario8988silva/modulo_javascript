// diferenças entre Live Node e Static Node:
let lista = document.querySelector('ul');

let itemsLive = document.getElementsByTagName('li'); // live nodes
let itemsStatic = document.querySelectorAll('li'); // static nodes

console.log(itemsLive);
console.log(itemsStatic);

let novoLi = document.createElement('li');
novoLi.textContent = 'teste';
lista.append(novoLi);
/*
destacar(itemsLive); // Live Node
*/
destacar(itemsStatic); // Static Node

console.log(itemsLive);
console.log(itemsStatic);

// function declaration:
function destacar(items){
    for (const item of items){
        item.classList.add('destaque');
    }
}