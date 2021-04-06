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
let student2 = {
    name: "Duquesa",
    age: 1.8,
    stars: 4.8,
    
}