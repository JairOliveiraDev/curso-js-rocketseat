// array
const animals = [
    'lion',
    'monkey',
    'cat',
    //add object in a array
    //Obs não misturar tipos diferentes de dados 
    {
        especie: 'bird',
        name: 'bibi'
    }
]

//acessar valores dentro do array
console.log(animals[2]);

//saber tamanho do array
console.log(animals.length);

//acessar objeto dentro de uma array
console.log(animals[3].name);// result 'bibi'
