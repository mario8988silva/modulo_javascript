let output = document.querySelector('#output');
/*
//chama o ficheiro .txt
fetch('texto.txt')
// converte os dados do ficheiro
.then(response => response.text())
.then(data =>output.textContent = data + '<br> fetch')
.catch(() => output.textContent = 'Ocorreu um erro de comunicação');
*/

//ASYNC / AWAIT FUNCTIONS

/*
// a metodologia seguinte leva ao mesmo resultado que a metodologia anterior
// async define uma metodologia assincrona
async function lerTexto(){
    //await nunca pode ser invocado sem o uso de async
    let response = await fetch ('texto.txt');
    let data = await response.text();
    output.textContent = data + '<br> async-await';
}

// chama a function:
lerTexto();
*/

// faz a function anonima e disponibiliza no output, poupando linhas de codigo

/*
// simplificado:
(async function (){
        let response = await fetch ('texto.txt');
        let data = await response.text();
        output.textContent = data;
})();
*/


(async function (){
    // try serve tentar x, caso dê erro, faz catch
    try{
        let response = await fetch ('texto.txt');

        // caso exista um erro :
        if (!response.ok){
            throw new Error('Erro na Comunicação')
        }

        let data = await response.text();
        output.textContent = data;
    } catch (error) {
        console.log('ocorreu um erro');
    }
})();

async function ola(){
    return 'Olá da função assícrona'
}

ola().then( v => console.log(v));