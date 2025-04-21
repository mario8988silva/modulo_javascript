let obj = {
    name: 'Joao',
    lastName: 'Goncalves',
    // este address é um object
    address: {
        street: 'Rua da Betesga',
        city: 'Lisboa',
    }
};

let obj2 = {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
    "zipcode": "59590-4157",
    "geo": {
    "lat": "-68.6102",
    "lng": "-47.0653"
    }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
    "name": "Romaguera-Jacobson",
    "catchPhrase": "Face to face bifurcated interface",
    "bs": "e-enable strategic applications"
    }
    };

console.log(obj.address.city);

// x:y = agarra no conteudo de x e faz uma variavel y:
let {name, lastName:apelido, address:{street,city}} = obj;

console.log('Nome: ', name);
console.log('Apelido: ', apelido);

// aqui chamamos a city, tendo que chamar o caminho:
//console.log(address.city);

// aqui, chamamos o city, pois já está acreditado na linha 37 let ... = obj :
console.log('Endereço: ', city);


let {username, address:{geo:{lat, lng}}} = obj2;
console.log(lat);

