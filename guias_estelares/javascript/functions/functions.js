// Criar um aplicativo de frases motivacionais

// Declaration - declaração da função
// Function statement
function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é mãe do aprendizado')
}

// Executar a função
// Rodar, chamar, invocar
// Execute, run, call, invoke
createPhrases()

console.log('Fim do programa')

// -----------------------------------------------------------------------
// Function expression or function anonymous
// parâmetros (Parameters)

// const sum = function(number1, number2) {
//     console.log(number1 + number2)
// }

// sum(2, 3) //Passando arguments - argumentos
// sum(25, 17)

// -----------------------------------------------------------------------

const sum = function(number1, number2) {
    // Nunca criar uma variavel sem o operador especial
    // total = number1 + number2
    let total = number1 + number2
    return total
}

let number3 = 34
let number4 = 25

console.log(`O número 1 é ${number3}`)
console.log(`O número 2 é ${number4}`)
console.log(`A soma é ${sum(number3, number4)}`)

// console.log(total)

// -----------------------------------------------------------------------

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('limão', 'abacaxi')

console.log(copo)

// -----------------------------------------------------------------------
// function scope
let subject = 'create video'
// Passando variavel por valor
function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)

// Passando variavel por referência
function createThink2() {
    subject = 'black'
    return subject
}

console.log(createThink2())
console.log(subject)

// -----------------------------------------------------------------------
// function hoisting
sayMyName()

function sayMyName() {
    console.log('Marcos')
}

// Essa função abaixo não vai sofrer hoisting, pois foi declarado como const. Além do mais, nesse caso myName não é uma função, e sim uma variavel que recebe uma função sem nome
// myName()

// const myName = function () {
//     console.log('Fabiana')
// }

// Aqui o hoisting ocorre, no então como teste não é uma função e sim uma variavel, acarretara em um erro.
// teste()

var teste = function () {
    console.log('Duck e Duquesa')
}

// -----------------------------------------------------------------------
// Arrow function

const tekur = () => {
    console.log('Testando arrow function. Forma mais moderna de criar funções no JS.')
}

console.log(tekur)

// -----------------------------------------------------------------------
// Callback function
// Nada mais é do que uma função chamando para executar outra função
function callBack(name) {
    console.log('Antes de executar a função callback')
    name()
    console.log('Depois de executar a callback')
}

callBack(
    () => {
        console.log('Executando uma callback')
    }
)