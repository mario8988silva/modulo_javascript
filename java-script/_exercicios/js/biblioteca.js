// Função para gerar número aleat´rio entre dois números

/*
valor inicial (vi, valor final (vf)
Math.random() * (vf - vi) + + vi
Math.random() * (50 - 30) + 30
Math.round(Math.random() * (vf - vi) + vi)
*/

//abre uma funcionalidade com nome X e duas variáveis com valor atribuído (vi) e (vf):
function randomIntBetweenNumbers(vi=0, vf=1){
    let random = Math.round(Math.random() * (vf - vi) + vi);
    return random;
}