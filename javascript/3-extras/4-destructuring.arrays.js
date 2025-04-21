//  DESTRUCTURING DE ARRAYS:

let array = [
    1,
    2,
    3,
] // trailing comma ES8
// console.log(array.lenght);

let a = array[0];
let b = array[1];
let c = array[2];

console.log('a : ', a);
console.log('b : ', b);
console.log('c : ', c);

let [d, e, f] = array;
console.log('a : ', d);
console.log('b : ', e);
console.log('c : ', f);

let [g, ...h] = array;
console.log('a (associação directa): ', g);
console.log('b (associação a tudo o resto) : ', h);

// ----

function exemplo(){
    let nome = 'joao';
    let pais = 'portugal';

    return [nome, pais];
}

let [nome, pais] = exemplo;
console.log(nome);
