

console.log('-------------------------');
// ES6 - SPREAD OPERATOR :

let array1 = [1, 2, 3,];
let array2 = [4, 5, 6,];

let novaArray = [100, 'mario', ...array2, true, ...array1, {nome: 'joao', apelido: 'silva'}];
console.log('novaArray: ', novaArray);


console.log('-------------------------');
// COPY BY REFERENCE :

let copyByReference = array1;
console.log('array1: ', array1);
console.log('copyByReference: ', copyByReference);

array1.push(10);
console.log('array1: ', array1);
console.log('copyByReference: ', copyByReference);

array1.push(100);
console.log('array1: ', array1);
console.log('copyByReference: ', copyByReference);


console.log('-------------------------');
// COPY BY VALUE (CLONE) :

let clone = [...array1];
console.log('array1: ', array1);
console.log('clone: ', clone);

clone.push(789);
console.log('array1: ', array1);
console.log('clone: ', clone);


console.log('-------------------------');
// UTILIZAR SPREAD COMO PARAMETROS DE FUNCOES :

let parametros = [5, 9];

console.log('addNums: ', addNums(...parametros));
function addNums(num1, num2){ // function declaration (hosting)
    return num1 + num2
}

let nome = "manuel da silva";
console.log(...nome);

let letras = [...nome];
console.log(letras);

