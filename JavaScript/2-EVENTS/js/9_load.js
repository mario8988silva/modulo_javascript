// o script só é lido depois da página html ser lida.
// boa prática:
/*
window.addEventListener('load', init, false);

function init(){
    let username = document.querySelector('#username');
    username.value = 'teste';
}
*/

// 
window.addEventListener('DOMContentLoaded', init, false);

// todo o conteúdo do script vai ser inserido aqui dentro desta função:
function init(){
    let username = document.querySelector('#username');
    username.value = 'teste';
}