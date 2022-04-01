// function hoisting
console.log(sayMyName());
//funçoes declaras assim sofre hoisting
// ou seja a função é elevada e pode ser chamada antes da funçao
function sayMyName(nome) {
    nome = 'jair'
    return nome;
}

//console.log(sayYourName());
//função anonima
// não ocorre o hoisting 
const sayYourName = function(nome) {
    nome = 'maike'
    return nome;
}

console.log(sayYourName());

//arrow function

const sayMyName1 = (name) => {
    return name
}

console.log(sayMyName1('juca'));