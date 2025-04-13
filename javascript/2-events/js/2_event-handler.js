let username = document.querySelector('#username');
let feedback = document.querySelector('#feedback');
/*
// é uma function declaration (hoisting):
function checkUsername(){
    if (username.value.length < 5) {
        feedback.textContent = 'Tem que ter mais de cinco caracteres';
    } else {
        feedback.textContent = '';
    }
}

// assim só activa quando a função se der:
username.onblur = checkUsername;

// assim activa de imediato:
//username.onblur = checkUsername();

*/

username.onblur = function (){ // event handle - function annonymous
    if (username.value.length < 5){
        feedback.textContent = 'Tem que ter mais de cinco caracteres';
    } else {
        feedback.textContent = '';
    }
}