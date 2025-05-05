let geoBtn = document.querySelector('#geoBtn');
let output = document.querySelector('#output');

geoBtn.addEventListener('click', lerCooredenadas, false);

function lerCooredenadas(){
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(sucesso, erro);
    }
}

function sucesso(e){
    console.log('Sucesso: ', e);
    let {coords: {altitude, longitude, latitude, accuracy}} = e;

    output.innerHTML = `
        <!--<h1>Latitude: ${e.coords.atitude} </h1> ou -->
        <h1>Latitude: ${latitude} </h1>
        
        <h1>Longitude: ${longitude} </h1>
        <h1>Altitude: ${altitude}m </h1>
        <h1>Accuracy: ${accuracy}m </h1>
        `
}

function erro(error){

    output.innerHTML = `
        <h1> Erro: ${error.code}, ${error.message}</h1>`


}