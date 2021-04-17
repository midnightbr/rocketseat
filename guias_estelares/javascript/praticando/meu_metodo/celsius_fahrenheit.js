/*
    Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou
    fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
*/

/* VERSION 1.0
let temperature

function celsius(graus) {
    let celsius
    // console.log(typeof graus)
    celsius = (graus - 32) * 5/9
    // console.log(typeof celsius)
    celsius = celsius.toFixed(2)
    return celsius
}

function fahrenheit(graus) {
    let fahrenheit
    // console.log(typeof graus)
    fahrenheit = graus * 9/5 + 32
    // console.log(typeof fahrenheit)
    fahrenheit = fahrenheit.toFixed(2)
    return fahrenheit
}

temperature = '33.8'
console.log(celsius(temperature))
temperature = 28
console.log(fahrenheit(temperature))
*/

// VERSION 1.1
function conversion(graus) {
    let conversion
    let array = Array.from(graus)
    // console.log(array)
    const celsius = array.indexOf('C') != -1
    // console.log(celsius)
    const fahrenheit = array.indexOf('F') != -1
    array.pop()
    // console.log(array)
    graus = array.join("")
    // console.log(graus)
    // console.log(fahrenheit)
    
    if(celsius) {
        conversion = graus * 9/5 + 32
        conversion = conversion.toFixed(2)
        console.log(`A temperatura ${graus}ºC Celsius é igual a ${conversion}ºF Fahrenheit`)
    } else if(fahrenheit) {
        conversion = (graus - 32) * 5/9
        conversion = conversion.toFixed(2)
        console.log(`A temperatura ${graus}ºF Fahrenheit é igual a ${conversion}ºC Celsius`)
    } else {
        console.log('Valor inválido.')
    }
}

conversion('30C')
conversion('50F')
conversion('10Z')