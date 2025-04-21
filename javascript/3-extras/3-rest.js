// REST OPERATOR :

exemplo(1, 2, 3, 4, 5, 6, 7, 8, 9,);

// os valores unitarios serao associados separadamente. tudo o resto, aquilo que sobrar, vai para dentro dos argumentos
function exemplo(a, b, ...argumentos){
    console.log('a: ', a);
    console.log('b: ', b);
    console.log('argumentos: ', argumentos);
}