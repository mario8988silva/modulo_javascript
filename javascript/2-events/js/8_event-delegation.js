// eliminar items
/*
//selecciona todos os li:
let items = document.querySelectorAll('li');

//

for (const item of items) {
    item.addEventListener('click', eliminarItem, false)    
}
*/
//ou
//
let ul = document.querySelector('ul');
    ul.addEventListener('click', eliminarItem, false);

//
function eliminarItem (ev){    

    /*
    // faz variável que executa um evento que foca o elemento-pai daquele "clicado":
    let itemAEliminar = event.target.parentElement;
    */

    // execepções:
    if(event.target.nodeName === 'EM'){
        // sobe nivel duas vezes, daí a repetição do parent element
        event.target.parentElement.parentElement.remove();
    } else {
        event.target.parentElement.remove();
    }

    /*
    // remove este elemento:
    itemAEliminar.remove();
    */

    event.preventDefault(); //previne o comportamento normal de um elemento (neste caso, da hiperligação);

    console.log(event.target);
}