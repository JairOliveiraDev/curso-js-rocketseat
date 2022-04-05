// switch
/* let carOption = 'b';
switch (carOption) {
    case 'a':
        console.log('voce escolheu a')
        //codigo
        break
    case 'b':
        console.log('voce escolheu b')
        //codigo
        break
    default:
        console.log('voce escolheu default')

        break
}
*/

function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break
        case '-':
            result = number1 - number2;
            break
        case '*':
            result = number1 * number2;
            break
        case '/':
            result = number1 / number2;
            break
        default:
            console.log('não implementado');
            break            

    }

    return result
    
}

console.log(calculate(4, '/', 8).toFixed(2));