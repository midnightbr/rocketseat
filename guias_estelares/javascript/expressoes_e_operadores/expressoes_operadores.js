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