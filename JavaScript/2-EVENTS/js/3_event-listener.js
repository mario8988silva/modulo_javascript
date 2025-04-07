let username = document.querySelector('#username');
let feedback = document.querySelector('#feedback');


// EVENT LISTENER :
// primeiro parametro tem de ser uma string, o segundo x, o terceiro y:
username.addEventListener('blur', checkUsername, false);

// LISTENER
function checkUsername(){
    if (username.value.length < 5) {
        feedback.textContent = 'Tem que ter mais de cinco caracteres';
    } else {
        feedback.textContent = '';
    }
}


// EVENT LISTENER, OUTRO MÉTODO :
/*
username.addEventListener('blur', function(){
    if (username.value.length < 5){
        feedback.textContent = 'Tem que ter mais de cinco caracteres';
    } else {
        feedback.textContent = '';
    }
}
    */