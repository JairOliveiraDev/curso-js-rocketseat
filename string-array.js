// manipulando strings
//verifica se o texto contem a palavra amor
let phrase = "Eu quero viver o amor";
console.log(phrase.includes("amor"));// retorna true
console.log(phrase.includes("Amor"));//retorna false pois essa função é case Sensitive

//criar array com construtor
let myArray = new Array('a', 'b', 'c');
console.log(myArray);

let arraySize = ["a", "b", "c"];
// contar elemnetos de um array
console.log(arraySize.length);//return 3
console.log([
    "a",
    {type: "array"}, 
    function() {return "alo"},// função anonima dentro da array
][2]())// return function anonymous

//transform a chain of character, in an element of array 
let word = "manipulation";
let characterToString = Array.from(word);
console.log(Array.from(word));
console.log(characterToString.length);


//manipulation of array
let techs = ["html", "css", "js"];
//add items in the end of array
techs.push("nodejs");
//add items in the beginning of array
techs.unshift("sql");
//remove items in the end of array
//remove items in the beginning of array
// get one or more items in the array
//remove one or more items in any position in the array
// find a position, of an element in array

console.log(techs);