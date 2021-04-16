/*
* Array (vetores)
    * Uma lista
    * Agrupamento de dado
    
    ["Marcos", 24]
*/
// Modelos de array
console.log(["Marcos", 24, "Homem"])

console.log([
    "Carne",
    "Ovos",
    "Café"
])
// Ambos estão com a sintaxe correta e ambas as formas funcionam.

const animals = [
    'Lion',
    'Dog',
    'Tiger',
    'Cat',
    {
        name: 'Duck',
        age: 2
    },
    {
        name: 'Duquesa',
        age: 1.5
    }
]

// Acessar valores dentro do array
console.log(animals)
console.log(animals[1])
console.log(animals[4].name)
console.log(animals[5].name)

// Total de objetos no array
console.log(animals.length)