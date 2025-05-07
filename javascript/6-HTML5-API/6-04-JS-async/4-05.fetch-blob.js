let output = document.querySelector('#output');

    fetch('https://picsum.photos/500/400')
    .then( resp => resp.blob())
    .then( data => {
        // faz
        let image = new Image();
        //pega nos dados que está a receber, cria uma url
        let imgUrl = URL.createObjectURL(data);
        image.src = imgUrl;
        output.append(image);
    })