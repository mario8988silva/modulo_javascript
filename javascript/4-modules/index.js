import testeDefault, {olaUniverso, teste} from "./02-libEs6.js";
import { numeros} from "./data.js";

let output = document.querySelector('#output');

output.innerHTML = `<h2> A utilizar o módulo de ES5 : Nome: ${libEs5.nome}</h2>`;
output.innerHTML += `<h2>ES5 : Mensagem: ${libEs5.sayHi()}</h2>`;

output.innerHTML += `<br>`;

output.innerHTML += `<h2>ES6 : Mensagem: ${olaUniverso()}</h2>`;

output.innerHTML += `<h2>ES6 : Mensagem 2: ${teste()}</h2>`;

output.innerHTML += `<h2>ES6 : EXPORT DEFAULT: ${testeDefault()}</h2>`;

output.innerHTML += numeros;