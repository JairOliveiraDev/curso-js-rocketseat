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

