
// object literal: quando declaramos literalmente o objecto :
const object1 = {
    nome: 'Maria',
    apelido: 'Silva',
    /*
    nomeCompleto: function(){
        return `${this.nome} ${this.apelido}`
    }
    */
}

console.log('Objecto 1: ', object1);

// Adiciona-se uma variável que não extista dentro do nosso objecto:
object1.pais = 'Portugal';
console.log('Adcionado nova propriedade ao nosso objecto: ', object1);

object1.nomeCompleto = function(){
    return `${this.nome} ${this.apelido}`
}

//Adicionada nova function ao nosso objecto:
console.log(object1);



// OBJECT.CREATE()
console.log('------------------------------');

// faz um novo objecto com as propiedades de outro objecto:
const object2 = Object.create(object1);

// faz return de um object vazio:
console.log(object2);

// faz return da propiedade x do object, sendo que 
console.log(object2.nome);

// sobrepoe o valor da propiedade neste novo objecto, sem compremeter o primeiro objecto:
object2.nome = 'Joaquina';
console.log(object2);

console.log(object2.nomeCompleto);
console.log(object1.nomeCompleto);

//faz undefine, dado que nao encontra:
console.log(object2.xpto);