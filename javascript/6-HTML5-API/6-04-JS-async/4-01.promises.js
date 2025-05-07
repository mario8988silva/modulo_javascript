let manterPalavra = true;

let promise = new Promise((resolve, reject) => {
    if(manterPalavra){
        resolve('Promessa Cumprida');
    } else {
        reject('Promessa Quebrada');
    }
});

console.log('Promise: ', promise);

let promise2 = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve('Promessa Cumprida')
    }, 3000) //tempo de espera até resposta
});

console.log('Promise com setTimeout: ', promise2);

// esta forma de escrever código é como se fosse uma só linha:
// faz várias coisas em cadeia. enquanto uma não for cumprida, a outra não inicia:
promise2
    .then( val => console.log(val))
    .then( () => console.log('instrucção dummy'))
    .catch( err => console.log(err))
    .finally( () => console.log('Executado idependentemente de ser ou não cumprida'))