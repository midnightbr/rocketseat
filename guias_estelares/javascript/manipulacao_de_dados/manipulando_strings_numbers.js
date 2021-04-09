// Manipulando Strings e Números

// Transformando String em Número
let string = "123"
console.log(Number(string))
// console.log(typeof string)
let number = 321
console.log(Number(string) + number)
console.log(String(number))
// console.log(typeof number)
console.log(string + String(number))

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length) // Como números não recebi a função length, o primeiro passo é converter do tipo number para o tipo string.