/*
    Transformar notas escolares

    Esse algoritmo transforma notas do sistema numérico 
    para o sistema de notas em carcateres tipo A B C
*/
let notaA
let notaB
let notaC
let notaFinal

// Teste do código
// notaA = 90
// notaB = 90
// notaC = 95

notaFinal = (notaA + notaB + notaC) / 3

console.log('A média da sua nota foi')
if(notaFinal > 90) {
    console.log('A')
} else if(notaFinal < 90 && notaFinal >= 80) {
    console.log('B')
} else if(notaFinal < 80 && notaFinal >= 70) {
    console.log('C')
} else if(notaFinal < 70 && notaFinal >= 60) {
    console.log('D')
} else if (notaFinal < 60) {
    console.log('F')
} else {
    console.log('Nota inválida. Tente Novamente')
}