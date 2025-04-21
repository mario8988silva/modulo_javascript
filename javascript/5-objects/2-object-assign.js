
let objecto1 = {
    nome: 'Mario',
    apelido: 'Silva',
    morada: {
        rua: 'Rua do Comercio',
        numero: {
            porta: 7,
            letra: 'A',
        }
    }
}


const carro = {
    marca: 'Lexus',
    ano: 2022,
}


console.log(objecto1);

let {nome, apelido, morada: {numero: {porta}}} = objecto1;

console.log(objecto1.morada.numero.porta);
console.log(porta);


// COMPOSITION - OBJECT.ASSIGN()
console.log('------------------------------');

const novoObjecto = Object.assign({}, objecto1, {pais: 'Portugal'} );

objecto1.nome = 'Manuel';
console.log('objecto 1: ', objecto1);
console.log('Novo Objecto: ', novoObjecto);

// CLONE :
const novoObjecto2 = {...objecto1};
console.log('objecto 1: ', objecto1);
console.log('novoObjecto 2: ', novoObjecto2);

console.log('------------------------------');


// junção de pessoa com carro:

const objectoComCarro = Object.assign({}, objecto1, carro);
console.log('Objecto Com Carro', objectoComCarro);

const objectoComCarro2 = {
    // adiciona todos as propiedade e devidos valores de cada um dos objectos:
    ...objecto1,
    ...carro,
    // faz update do valor que já existe:
    ...{pais: 'Espanha'}, 
};
console.log('Objecto Com Carro', objectoComCarro2);