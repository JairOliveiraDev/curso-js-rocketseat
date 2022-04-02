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
//techs.pop();
//remove items in the beginning of array
//techs.shift();
// get one or more items in the array
let arraySlice = techs.slice(1, 3);
//remove one or more items in any position in the array
let indexRemove = techs.indexOf("html")
techs.splice(indexRemove, 1);
//techs.splice(1, 2)
// find a position, of an element in array
let index = techs.indexOf("css");


console.log(arraySlice);
console.log(techs);
console.log(index);