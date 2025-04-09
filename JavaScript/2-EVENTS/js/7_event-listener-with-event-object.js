// chama os elementos html por meio de id e transforma-os em variáveis:
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let apelido = document.querySelector('#apelido');

username.focus();

/*
username.addEventListener('blur', check, false);
apelido.addEventListener('blur', check, false);
password.addEventListener('blur', check, false);
*/

// ev significa Event, é uma variável para defenir o evento. variável que ainda não foi criada mas já está aqui a ser declarada
// o elemento html (neste caso input),  é chamado/modificado quando (deixar de ser "focus", o event vai retornar dentro da function check (ainda a ser declarada), event valor):
username.addEventListener('blur', (ev) => check (ev,5), false);
apelido.addEventListener('blur', (ev) => check (ev,7), false);
password.addEventListener('blur', (ev) => check (ev,9), false);

// declaração da function check (criar a variavel ev (event) e criar a variável min)
function check (ev, min){

    // continuar comentários !!!
    let campoAValidar = ev.target;
    let divMsgErro = campoAValidar.nextElementSibling;

    if (campoAValidar.value.length < min){
        divMsgErro.textContent = `O ${ev.target.id}, tem que ter mais de ${min} caracteres`
    } else{
        divMsgErro.textContent = '';
    }
}