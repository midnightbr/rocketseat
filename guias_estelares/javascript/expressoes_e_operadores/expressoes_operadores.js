/* 
    Expressões e Operadores

    -Expressions
    -Operators
        * Binary
        * Unary
        * Ternary
*/

// Expressão
let number = 1;

/* Existe alguns casos no qual o ";" é obrigatorio no JS
   como no caso de haver uma função alto executavel,
   como no exemplo abaixo.*/
(function() {
    console.log('alo')
})()
// Caso o ";" seja removido, o navegador apresentara um erro.

// Operators - Binary
console.log(number + 1)

// Operators - Unary
console.log(++number)

// Operators - Ternary
console.log((number == 1) ? 'alo' : 'nada')

/*
    new

    * left-hand-side expression
    * criar um novo objeto
*/

let name = new String('Marcos')
name.surName = 'Henrique'
let age = new Number(24)
console.log(name, age)

let date = new Date('2021-04-13')
console.log(date)

/*
    Operadores unários
        typeof
        delete
 */

//typeof, usado para descobrir o tipo de algum objeto
console.log(typeof age)

// delete
const person = {
    name: "Marcos",
    age: 24,
    Student: true,
}
console.log(person)
// delete vai apagar a variavel de dentro do objeto person
delete person.age
console.log(person)
console.log(typeof person)

// Operadores Aritiméticos
// multiplicação
console.log(3.2 * 5.5)
// divisão
console.log(12 / 2)
// soma
console.log(34 + 67)
// subtração
console.log(34 - 23)
// resto da divisão
let remainder
remainder = 11 % 3
console.log(remainder)
// incremento
let increment = 0
increment++
console.log(increment++)
console.log(increment)
console.log(++increment)
// decremento
let decrement = 5
console.log(--decrement)
console.log(decrement--)
console.log(decrement)
// exponencial
console.log(3 ** 3)
console.log(5 ** 2)

// Grouping operator ()
let total = 2 + 3 * 5
console.log(total)
total = (2 + 3) * 5
console.log(total)

// Operadores de Comparação
// Irá comparar valores e retornar um Boolean como resposta á comparação

let one = 1
let two = 2

// == igual
console.log(one == two) //false
console.log(one == "1") //true
// != diferente
console.log(one != two) //true
console.log(two != "2") //false
// === estritamente igual
console.log(one === two) //false
console.log(one === "1") //false
// !== estritamente diferente
console.log(one !== two) //true
console.log(two !== "2") //true
// > Maior
console.log(one > two) //false
// >= Maior igual
console.log(one >= two) //false
// < Menor
console.log(one < two) //true
// <= Menos igual
console.log(one <= two) //true

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