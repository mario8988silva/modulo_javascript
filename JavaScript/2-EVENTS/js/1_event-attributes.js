let username = document.querySelector('#username');
let feedback = document.querySelector('#feedback');

function checkUsername(){
    if (username.value.length < 5) {
        feedback.textContent = 'Tem que ter mais de cinco caracteres';
    } else {
        feedback.textContent = '';
    }
}