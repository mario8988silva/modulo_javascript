let pessoa = {
    nome: 'mario',
    verNome: function(){
        return this.nome
    }
};

let outraPessoa = Object.create(pessoa);

console.log(pessoa.verNome());

outraPessoa.nome = 'Jaquina';
console.log(outraPessoa.verNome());

// passar contexto de execução de um objecto, mas chama outro objecto:
console.log(outraPessoa.verNome.call(pessoa));