
// ALTERAR TEXTO DOS ELEMENTOS:

// dar nome às classes iguais às dos id ajuda na organização:
let scriptResults = document.getElementById('scriptResults');
let item2 = document.querySelector('#two');

// LEITURA:
console.log(item2.textContent);

// ESCRITA:
// não interpreta texto; apenas reproduz texto:
item2.textContent = 'Morangos'; 

// O browser interpreta, mas não deve ser usado, dado que não é standart:
item2.innerText = 'Teste';

// interpreta o código html:
scriptResults.innerHTML = '<p>Hello World</p>';
// cuidado com o innerHTML : não deve ser usado em situações de for ulários, ou das quais existem inputs fora do nosso controlo. Isto pode levar a hackeamentos, dado que pode ser escrito código aqui dentro que assim será interpretado como tal.

