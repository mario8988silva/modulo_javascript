function Pessoa(nome='John', apelido='Doe'){
    this.nome = nome;
    this.apelido = apelido;

    this.nomeCompleto = function(){
        return `Foi criada uma Pessoa com o nome: ${this.nome} ${this.apelido}`;
    }
}

console.log(Pessoa);

let joao = new Pessoa('João', 'Gonçalves');

console.log(joao);

console.log(joao.nomeCompleto());

console.log('-------------------');

let manuel = new Pessoa('Manuel');
console.log(manuel);
console.log(manuel.nomeCompleto());

console.log('-------------------');

// adiciona apenas a um constructor/objecto. surge num e nao no outro:
joao.pais = 'PT';
console.log(joao);
console.log(manuel);

console.log('-------------------');

// acrescenta um novo parâmero a todos, sendo que a "base" foi afectada:
Pessoa.prototype.titulo = 'Sr.';
console.log(joao);
console.log(manuel);

console.log('-------------------');
console.log('-------------------');

// Herança:
function Developer(nome, apelido, linguagem='JavaScript'){
    // call = executa uma função:
    Pessoa.call(this, nome, apelido);

    this.linguagem = linguagem;

    this.programa = function(){
        return `Foi criado um Devolper: ${this.nome} ${this.apelido} que gosta de ${this.linguagem}`
    }

    console.log(this.programa);
};

let antonio = new Developer('Antonio');
console.log(antonio);
