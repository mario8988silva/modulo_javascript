function lerMusica(){
    console.log('Contexto de Execução GLobal');
}

let jukebox = {
    musicas: [
        {titulo: 'So Long', artista: 'Fisher Z'},
        {titulo: 'La Folie', artista: 'Stranglers'},
    ],

    lerMusica: function(musica){
        console.log(`Playing: ${musica.titulo} - ${musica.artista}`);
    },
/*
//nao funciona, dado que estamos a chamar uma função privada para uma função global:
    lerMusicas: function(){
        this.musicas.forEach(
            function(musica){
                this.lerMusica(musica)
            }
        )
    }    
*/
// SOLUÇÕES:
/*
    lerMusicas: function(){
        this.musicas.forEach(
            function(musica){
                this.lerMusica(musica)
            }.bind(this) //passar o contexto cá para
        )
    }    
*/
/*
lerMusicas: function(){

    let self = this;

    this.musicas.forEach(
        function(musica){
            this.lerMusica(musica)
        }.bind(this) //passar o contexto cá para
    )
}    
*/

lerMusicas: function(){

    this.musicas.forEach(
        this.musicas.forEach(
            (musica) => this.lerMusica(musica)
            // function expression - nao tem contexto de execução próprio
        )
    )
}    
}

jukebox.lerMusicas();