// Celsius em fahrenheit 
//crie uma função que receba uma intring em celcius
//ou fahrenheit e faça a transformação de uma unidade para a outra
// C = (F -32) * 5/9
// F = C * 9/5 + 32
//my error solution
/*
let celciusInput = "20";
let fahrenheitInput = "80";
let temporaryFahrenheit;
let temporaryCelcius;
let total = 0;
//option 1 fahrenheit to celcius
//option 2 celcius to fahrenheit
let option = 2;

if (option === 1) {
    temporaryFahrenheit = parseFloat(fahrenheitInput);
    temporaryCelcius = parseFloat(celciusInput);
    total = (temporaryFahrenheit - 32) * 5 / 9;
    console.log('Coversão Fahrenheit para Celcius');
    console.log(`${temporaryFahrenheit} Fahrenheit. Em celcius ${total.toFixed(2)}`);

} else if (option === 2) {
    temporaryFahrenheit = parseFloat(fahrenheitInput);
    temporaryCelcius = parseFloat(celciusInput);
    total = temporaryCelcius * 9 / 5 + 32;
    console.log('Convesão de Celcius para Fahrenheit');
    console.log(`${temporaryCelcius} Celcius. Em Fahrenheit ${total.toFixed(2)}`);
} else {
    console.log('invalid option');
}
*/

//solution by my teacher
// transformDegree('50F")
function transformDegree(degree) {
    const celsiusExists = degree.upperCase().includes('F');
}