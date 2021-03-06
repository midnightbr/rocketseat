//1 - Declare uma variável de nome weight
let weight

//2 - Que tipo de dado é a variável acima?
console.log(typeof weight)

//3 - Declare uma variável e atribua valores para cada um dos dados:
let name
let age
let stars
let isSubscribed

name = "Midnight"
age = 24
stars = 4.92
isSubscribed = true

console.log(name, age, stars, isSubscribed)

//4 - A variável student abaixo é de que tipo de dados?
// let student = {}
// R: Variável do tipo object
let student = {}
console.log(typeof student)

// 4.1 - Atribua a ela as mesmas propriedades e valores do exercício 3.
student = {
    name: "Duck",
    age: 2,
    stars: 4,
    weight: 17.5,
    isSubscribed: false
}
console.log(student)

/* 4.2 - Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg.*/
console.log(`${student.name} de idade ${student.age} anos, pesa ${student.weight}kg.`)

// 5 - Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio.
let students = []
console.log(typeof students)

// 6 - Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copie e cole o objeto, mas usar o objeto criado e inserir ele no array)
students = [
    student
]
console.log(students)

// 7 - Coloque no console o valor da posição zero do array acima
console.log(students[0])

// 8 - Crie um novo student e coloque na posição do array students
// Criando novo objeto
let student2 = {
    name: "Duquesa",
    age: 1.8,
    stars: 4.8,
    weight: 4.5,
    isSubscribed: false
}
// Adicionando novo objeto no arrat
students = [
    student,
    student2
]
console.log(students)

/* 
    9 - Sem rodar o código responda qual é a reposta do
    código abaixo e por que? Após sua resposta, rode o código e veja
    se você acertou. 
    
    console.log(a)
    var a = 1
*/
/* Reposta: Ira aparecer no console a variavel 'a' como indefinida, 
devido a variavel ser global e ser declarada como var. E como o console
log está antes da atribuição do valor, então a variável ainda não recebeu seu valor.
Sofrendo assim o hoisting.
*/

console.log(a)
var a = 1