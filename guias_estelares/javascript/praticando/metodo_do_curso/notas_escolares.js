/*
    Transformar notas escolares

    Cire um algoritmo que transforme as notas do sistema
    numérico para sistema de notas em caracteres tipo A B C
*/
console.log('Metodo do curso')

let score = 100

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0
    
    let scoreFinal
    
    if(scoreA) {
        scoreFinal = 'A'
    } else if(scoreB) {
        scoreFinal = 'B'
    } else if(scoreC) {
        scoreFinal = 'C'
    } else if(scoreD) {
        scoreFinal = 'D'
    } else if(scoreF) {
        scoreFinal = 'F'
    } else {
        scoreFinal = 'Nota inválida'
    }
    
    return scoreFinal
}

console.log(getScore(95))
console.log(getScore(75))
console.log(getScore(50))