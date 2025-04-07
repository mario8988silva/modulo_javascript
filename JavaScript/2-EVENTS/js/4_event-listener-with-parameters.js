let username = document.querySelector('#username');
let feedback = document.querySelector('#feedback');
username.focus(); // conforme abre a pagina, o input fica seleccionado

/*
username.addEventListener('blur', validar, false);

function validar(){
    checkUsername(6);
}
*/

//ou//

//ou//

username.addEventListener('blur', () => check(7), false);

function check(min){
    if (username.value.length < min) {
        feedback.textContent = `Tem que ter mais de ${min} caracteres`;
    } else {
        feedback.textContent = '';
    }
}