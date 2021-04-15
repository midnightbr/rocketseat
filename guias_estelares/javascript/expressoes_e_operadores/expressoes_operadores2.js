// Operadores de atribuição (Assignment)
let x

console.log(x)

// assignment
x = 1
console.log('assignment', x)

// addition assignment
x += 2
console.log('addition assignment', x)

// subtraction assignment
x -= 1
console.log('subtraction assignment', x)

// multiplication assignment
x *= 2
console.log('multiplication assignment',x)

// division assignment
x /= 2
console.log('division assignment',x)

/* Operadores lógicos (logica operators)
  2 valores booleanos, quando verificados,
  resultará em verdadeiro ou falso*/

  let pao = true
  let queijo = true

// AND &&
console.log('Tem pão e queijo?', pao && queijo)

pao = true
queijo = false
// OR ||
console.log('Tem pão ou queijo', pao || queijo)

// NOT ! - Negação, troca o valor da variavel
// Se tiver true, transforma em false e assim vice versa
console.log(!pao, !queijo)

/*
    Operador Condicional (Ternário)
    
    Dependendo da condição, nós receberemos valores diferentes
    Condição então valor 1 se não valor 2
    Condition ? value1 : value2
*/

// Exemplos
// Café da manhã top

let niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)

pao = true
queijo = true
niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)

// Maior de 18
let canDrive = age >= 18 ? 'Can drive' : 'Cannot drive'
console.log(canDrive)

age = 16
canDrive = age >= 18 ? 'Can drive' : 'Cannot drive'
console.log(canDrive)

// Operador de String (String operator)
// comparison (comparação)
console.log('a' == 'b')
console.log('b' != 'a')

// concatenation (concatenação)
// Retorna a união de duas Strings
console.log('a' + 'a')
let alpha = 'alpha'
console.log(alpha + 'bet')
number = 4
console.log(number += 15)

/*
    FALSY
    Quando um valor é considerado false em contextos onde um 
    booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    underfined
    NaN
*/
console.log(false ? 'verdadeiro' : 'falso')
console.log(0 ? 'verdadeiro' : 'falso')
console.log(-0 ? 'verdadeiro' : 'falso')
console.log("" ? 'verdadeiro' : 'falso')
console.log(null ? 'verdadeiro' : 'falso')
console.log(undefined ? 'verdadeiro' : 'falso')
console.log(NaN ? 'verdadeiro' : 'falso')

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um
    booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/
console.log(true ? 'verdadeiro' : 'falso')
console.log({} ? 'verdadeiro' : 'falso')
console.log([] ? 'verdadeiro' : 'falso')
console.log(1 ? 'verdadeiro' : 'falso')
console.log(3.23 ? 'verdadeiro' : 'falso')
console.log("0" ? 'verdadeiro' : 'falso')
console.log("false" ? 'verdadeiro' : 'falso')
console.log(-1 ? 'verdadeiro' : 'falso')
console.log(Infinity ? 'verdadeiro' : 'falso')
console.log(-Infinity ? 'verdadeiro' : 'falso')

/*
    OPERATOR PRECEDENCE
        Precedência de operadores

* grouping                  ()
* negação e incremento      ! ++ --
* expoente de elevação      **
* multiplicação e divisão   * /
* adição e subtração        + -
* relacional                < <= > >=c
* igualdade                 == != === !==
* AND                       &&
* OR                        ||
* condicional               ?:
* assignment (atribuição)   = += -= *=

*/
console.log(2500*1.07**10)