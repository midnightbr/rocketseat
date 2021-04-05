/*
* Object
    * Objeto
    * Propriedades / Atributos
    * Funcionalidades / Métodos
    
    { propriedade: "valor" }
*/

console.log({
    name: "Marcos",
    year: 24,
    andar: function() {
        console.log('andar')
    }
})

const person = {
    name: 'Rider',
    age: 25,
    weight: 76,
    isAdmin: true
}

console.log(person)

console.log(person.name)

console.log(`${person.name} tem ${person.age} anos.`)