/*
   Prototype

   * prototype_based language
   * prototype chain
   * _proto_
*/

//manipulando numeros

let number = 345.33452345;
//exibe numero com 2 casas decimais e troca o ponto por virgula
console.log(number.toFixed(2).replace('.', ','));

//text transfor
word = 'programar é muito bom!!';
console.log(word.toLowerCase());
console.log(word.toUpperCase());

//manipulando strings e arrays

//separando strings
let phrase = "Eu quero viver o amor";
let myArray = phrase.split(' ');
let phraseWithUnderscore = myArray.join("_");
console.log(myArray);
console.log(phraseWithUnderscore);
console.log(phraseWithUnderscore.toUpperCase());