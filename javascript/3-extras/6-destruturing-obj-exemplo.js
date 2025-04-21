


let output = document.querySelector('#output');
let container = document.querySelector('#container');

container.addEventListener('click', dizerOla, false);


//function dizerOla(e){
//function dizerOla(e){
//function dizerOla({target: {value}}){

    //let {target: {value}} = e;

    //let texto = e.target.value;
    //let texto = target.value;
    //let texto = value;
    //output.textContent = texto;
    //output.textContent = value;

//}

/*
// as variaveis sao feitas dentro da function, por meio de associação do E
function dizerOla(e){
    let {target: {value}, currentTarget} = e;

    console.log('target value: ', value);
    console.log('current target: ', currentTarget);
}
*/

// aqui as variaveis sao construídas conforme a definição da function; altkey junta a tecla ALT: 
function dizerOla({target: {value}, currentTarget, altKey}){

    console.log('target value: ', value);
    console.log('current target: ', currentTarget);

    // diz se a tecla está a ser pressionada ou não conforme se clica num botão: 
    console.log('Alt ligado: ', altKey);
}

