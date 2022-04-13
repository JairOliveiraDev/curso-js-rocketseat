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
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');

    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado');
    }
    
    //arrow fuction fluxo ideal F to C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9;
    let degreeSign = 'C';

    // fluxo alternativo 
    if(celsiusExists) {
        updateDegree =Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32;
        degreeSign = 'F'
    }

    return formula(updateDegree) + degreeSign;
}

try {
   console.log(transformDegree('98F'));
   console.log(transformDegree('32C'));
   console.log(transformDegree('98G'));
} catch(error) {
    console.log(error.message);
}