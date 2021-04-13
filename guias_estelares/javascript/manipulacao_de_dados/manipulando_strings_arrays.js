// Manipulando Strings e Arrays

/*
Separe um texto que contem espaços, em um novo array onde
cada texto é uma posição do array.
Depois disso, transforme o array em um texto e onde eram espaços,
coloque "_".
*/
let phrase = "Quero me torna um grande programador!"
console.log(phrase)
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toUpperCase())

// Criar Array com construtor
let myArray2 = new Array('a', 'b', 'c')
console.log(myArray2)

// Contar elementos de um array
console.log(['a', 'b', 'c'].length)

// Transformar uma cadeia de caracteres em elementos de um array
let word = "manipulação"
console.log(Array.from(word))

// Array pode ter varios tipos de objetos dentro dele, como mostrado abaixo
// No caso abaixo, executamos uma função dentro do array, dentro do console.log
// O resultado é o retorno da função no console.log
console.log([
    'a', 
    {type: "array"}, 
    function() {return "alor"}
][2]())

// Manipulando Array
let techs = ['html', 'css', 'js']
// adicionar um item no fim
techs.push('nodejs')
// adicionar no começo
techs.unshift('sql')

console.log(techs)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)
 
// remover do fim
techs.pop()
// remover do começo
techs.shift()

console.log(techs)
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 1)
console.log(techs)

// encontrar a posição do elemento no array e remover o elemento
index = techs.indexOf('html')
techs.splice(index, 1)
console.log(techs)