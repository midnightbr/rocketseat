/*
    SISTEMA DE GASTOS FAMILIAR
    @autor - Marcos Henrique
*/
// Fluxo de Caixa
let cashFlow = {
    earnings: [],
    expenses: []
}
// Verificando o tipo da variavel
console.log(typeof cashFlow)
// verificando a variavel
// console.log(cashFlow)

function cashier() {
    function calculater(array) {
        let total = 0;
        for(let value of array) {
        total += value
        }
        return total
    }

    let arrayEarnings = cashFlow.earnings.length
    let arrayExpenses = cashFlow.expenses.length
    
    let earnings, expenses

    if (arrayEarnings > 1) {
        earnings = calculater(cashFlow.earnings)
    } else {
        earnings = cashFlow.earnings
    }
    if (arrayExpenses > 1) {
        expenses = calculater(cashFlow.expenses)
    } else {
        expenses = cashFlow.expenses
    }
    // console.log(earnings, expenses)
    let cashBalance
    cashBalance = earnings - expenses

    const itsOk = cashBalance >= 0

    if(itsOk) {
         console.log(`Seu saldo positivo é de R$${cashBalance.toFixed(2)}`)
    } else {
         console.log(`Seu saldo negativo é de R$${cashBalance.toFixed(2)}`)
    }
}

// Saldo positivo
cashFlow.earnings = [1555.85, 922, 250]
cashFlow.expenses = [250, 600, 350, 500]
cashier()

// // Saldo negativo
cashFlow.earnings = 2106.8
cashFlow.expenses = 2962.7
cashier()

// // Sem saldo
cashFlow.earnings = [2300.5, 310, 276, 75.85]
cashFlow.expenses = [2300.5, 310, 276, 75.85]
cashier()