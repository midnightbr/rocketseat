//Variavel do tipo VAR
var clima = "Quente"
console.log(clima)
clima = "Frio"
console.log(clima)
/* No caso de variaveis, aparentemente necessitasse declarar
a variavel (var) somente uma vez, quando criada a mesma.*/

// Variavel do tipo LET
let season = "Outono"
console.log(season)
season = "Inverno"
console.log(season)
/*A declaração da variavel do tipo LET funciona de forma parecida
com a forma VAR*/

//Variavel do tipo CONST
const cat = "no"
console.log(cat)
// cat = "yes"
// console.log(cat)
/*No console você vera que dara um erro, pois a declaração
de variavel do tipo CONST, significa que a variavel tera
sempre aquele valor, constante, e por tanto inalteravel.
Caso seja feita a tentativa de alteração, ocorrera o erro
reportado no navegador*/

/* Por ser uma variavel fracamente tipada e dinâmica, podemos fazer
algumas alterações */
let dogs = true
console.log(typeof dogs)
console.log(dogs)
dogs = "Yes"
console.log(typeof dogs)
console.log(dogs)