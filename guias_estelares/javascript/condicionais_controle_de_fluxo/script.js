// if...else
// Opção 01 - Funciona, mais um pouco bagunçado
let temperature = 36.5
if(temperature >= 37.5) {
    console.log('Febre alta')
} else if(temperature < 37.5 && temperature >= 37) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

// Opção 02 - Funciona e mais organizado. Recomendado
temperature = 37
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37
if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

// Switch
function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
            break;
        default:
            console.log('Não implementado')
            break;
    }

    return result
}

console.log(calculate(4, '+', 8))
console.log(calculate(5, '-', 2))
console.log(calculate(10, '*', 12))
console.log(calculate(15, '/', 5))
console.log(calculate(12, '^^', 2))

// Throw
function sayMyName(name = '') {
    if(name === '') {
        throw new Error("Nome é obrigatório.")
    }

    console.log('depois do erro')
}
// try...catch
try {
    sayMyName()
} catch(e) {
    console.log(e)
}
console.log('após a função de erro')