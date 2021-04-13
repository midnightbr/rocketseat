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
let number2 = 1234
console.log(String(number2).length) // Como números não recebi a função length, o primeiro passo é converter do tipo number para o tipo string.

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number3 = 345.334524
// Comando .toFixed() fixa a quantidade de casas decimais que estaram sendo exibidos
// Já o replace como já vimos, substituira o "."(ponto) por ","(vírgula)
console.log(number3.toFixed(2).replace(".", ","))
/* Obs: Quando trocado de ponto para virgula, o número não é mais da classe number
 e passa a ser da classe sting. 
Devido ao fato de que não existe virgula na classe number.*/
console.log(Number(number3.toFixed(2).replace(".", ",")))

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também.
let word2 = "Programar é muito bacana!"
// Deixando as letras todas maiúsculas.
console.log(word2.toUpperCase())
// Deixando as letras todas minúsculas
console.log(word2.toLowerCase())

// Verificando se o texto contém uma palavra especifica
let phrase = "Eu quero viver!"
console.log(phrase.includes("Amor"))
phrase = "Eu quero viver o amor!"
// Devido ao .includes ser case_sensitive, as letras maiusculas e minusculas tem diferença
console.log(phrase.includes("Amor"))
console.log(phrase.includes("amor"))