// control flow

// if ... else
let temperature = 37.4;

if(temperature >= 37.5) {
    console.log(`sua temperatura é: ${temperature.toFixed(2)}, você esta com febre alta `);
} else if(temperature < 37.5 && temperature >= 37) {
    console.log(`sua temperatura é: ${temperature.toFixed(2)}, você esta com febre moderada`)
} else {
    console.log(`sua temperatura é: ${temperature.toFixed(2)}, você esta com febre `)
}

/*
let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}
*/