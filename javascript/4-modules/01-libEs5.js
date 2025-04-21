// IIFE - Imediate Invoked Function Expression:


/*
(function(){})();
*/

let libEs5 = (function(){
    let nome = 'Mario';

    let apelido = 'Silva';

    function dizerOla(){
        return `Olá ${nome} ${apelido}`;
    }

    return {
        /*
        nome: nome,
        */
       // quando a key é igual ao value, podemos omitir o value:
       nome,
       sayHi : dizerOla,
    }

})();

console.log(libEs5.nome);
