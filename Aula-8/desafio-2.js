/* Sistema de gastos familiar

crie um objeto que possuirá 2 propriedades, ambas do tipo array
 
* receitas: []
* despesas: []

agora crie uma função que irá calcular o total de receitas e despesas
e ira mostrar uma mensagem se a familia esta com saldo positivo ou negativo
seguindo o valor do saldo
*/
//cria um objeto gasto familiar
let gastoFamiliar = {
    receitas: [2500, 3200, 250, 360],
    despesas: [900, 1100, 1600, 400]
}

//função soma array
function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value
    }
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(gastoFamiliar.receitas);
    const calculateExpenses = sum(gastoFamiliar.despesas);

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0;
    let balanceText = "negativo"
    if (itsOk) {
        balanceText = "positivo";
    }

    console.log(`seu saldo é ${balanceText}: ${total}`)
}

calculateBalance();