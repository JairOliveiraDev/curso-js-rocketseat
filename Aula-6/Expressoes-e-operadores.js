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

//dates
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

// Operadores de atribuição (Assignment)
let x

// assignment normal:
x = 1

// addition assignment (adição):
x += 2

// subtraction assignment (subtração):
x -= 1

// multiplication assignment (multiplacação):
x *= 2

// division assignment (divisão):
x /= 2

// exponetiation assignment (exponenciação):
x **= 2

// remainder assignment (resto de divisão):
x %= 2

//operador ternario
// condition ? valule1 : value2

//exemplo café top
let pao = true;
let queijo = true;

const niceBreackFast = pao && queijo ? 'café top' : 'café ruim';
console.log(niceBreackFast);

const nice = pao || queijo ? 'café top' : 'café ruim';
console.log(nice);

const niceBreack = !pao && !queijo ? 'café top' : 'café ruim';
console.log(niceBreack);

/* De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %=

*/