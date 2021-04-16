// Estrutura de repetição
// for
for(let i = 1; i < 10; i++) {
    console.log(i)
}
// Caso queira que o laço pare no meio do caminho
for(let i = 10; i > 0; i--) {
    if(i === 5) {
        // Break - para a execução do loop
        break;
    }
    console.log(i)
}
// Caso queira ignorar apenas um objeto
for(let i = 1; i <= 10; i++) {
    if(i === 5) {
        // continue - pula a execução do momento
        continue;
    }
    console.log(i)
}

// While
// Muito utilizado quando não sabemos a parada
let i = 10
while(i <= 20) {
    console.log(i)
    i++;
}

// For...of
let name = 'Marcos'
let names = ['Fabiana', 'Clayton', 'Pedro']
// Mostrando cada letra do nome Marcos
for(let char of name) {
    console.log(char)
}
// Mostrando cada nome do array names
for(let name of names) {
    console.log(name)
}

// for...in
let person = {
    name: 'Marcos',
    age: 30,
    weight: 76.5
}
for(let property in person) {
    // Mostra o nome da propriedade que está no array
    console.log(property)
    // Mostra o valor da propriedade que está no array
    console.log(person[property])
}