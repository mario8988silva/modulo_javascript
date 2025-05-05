let canvas = document.querySelector('canvas');

//define o tipo de contexto; 2d, 3d, etc... O "d" é caixa-baixa! :
let context = canvas.getContext('2d');

context.fillStyle = 'tomato';
context.fillRect(20, 20, 400, 200);
context.strokeStyle = 'green';
context.lineWidth = 10;
context.strokeRect(20, 50, 400, 200);