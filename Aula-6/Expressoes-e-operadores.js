/*
expressoes e operadores
-expressões
-operators
  Binary
  Unary
  Ternary
*/

// new
// left-hand-side expression
//criando objetos
let name = new String('mayk');
name.surName = "Brito"
let age = new Number(23);
console.log(name, age);

//datas
let data = new Date('2022-04-04');
//use __proto__ para ver os metodos desse objeto no console do navegador
console.log(data.__proto__);

//operadores unarios typeof delete
const person = {
  name: "mayk",
  age: 23
}
console.log(person.name, person.age);
console.log(person);
delete person.age
console.log(person);