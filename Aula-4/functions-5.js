/*
function() constructor
     * expressao new
     * criar um objeto
     * this keyword
*/

//declara uma função construtora
function Person(name){
    this.name = name // sempre vai referenciar a pessoa que esta fora
    this.walk = function() {
        return this.name + ' está andando'
    }
}

//transforma a função comum em função construtora
const maik = new Person('Mayk');
const nome = new Person('Jair');
console.log(maik.walk);
console.log(nome.walk);
