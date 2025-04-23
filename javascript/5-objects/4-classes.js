class Pessoa{
    //ES10

    nome = '';
    apelido = '';

    #titulo = 'Sr. ' //propriedade privada, inacessível fora da classe

    constructor(nome = 'John', apelido= 'Doe'){
        //quando criar um novo objecto, criar automaticamente este parâmetros
        this.nome = nome;
        this.apelido = apelido;
    }

    verNome(){
        return `Nome: ${this.#titulo} ${this.nome} ${this.apelido}`;
    }

    // Getters e Setters
    get titulo(){
        console.log(' - Dar acesso a propriedade privada - ')
        return this.#titulo;
    }

    set titulo(novoTitulo){
        this.$titulo = novoTitulo;
    }
}

let joao = new Pessoa('João', 'Gonçalves');
console.log(joao);
console.log(joao.apelido);
// console.log(joao.#titulo); //não consegue chamar a propriedade privada

joao.nome = 'Joao José';
console.log(joao);

// não conseguimos alterar a propriedade privada apenas com o getter (get); podemos, no entanto, alterar com o setter (set):
joao.titulo = 'Tenente';
console.log(joao.titulo);
console.log(joao);


// Herança de classes:

class Developer extends Pessoa{
    constructor(nome, apelido, linguagem='JavaScript'){
        super(nome, apelido);
        this.linguagem = linguagem;
    }

    programa(){
        return `Foi criado um Developer: ${this.nome} ${this.apelido} que gosta de ${linguagem}`
    }
}

let jose = new Developer('Jose', 'Silva');
console.log(jose);
console.log(jose.verNome());

let teste = new String ('Mario');
console.log(teste);