
// vário items :

let items = document.getElementsByTagName('li');
let itemsHot = document.querySelectorAll('li.hot');
console.log(items);
console.log(itemsHot);


for (const item of itemsHot) {
    item.className = 'cool';    
}

// NÃO FUNCIONA:
// itemsHot.map( item => item.className = 'cool');
// items.map( item.className = 'cool');

// DESTAs FORMAs FUNCIONA:
// let outraLista = Array.from(items);
let outraLista = [...itemsHot];
outraLista.map( item => item.className = 'cool')

// get... LIVE NODES : actualiza constantemente;
// query... STATIC NODES : não actualiza;