/* 
    STRING

    * Cadeia de caracteres

    " " -> aspas duplas
    ' ' -> aspas simples
    ` ` -> template literals ou template strings
*/
//Quando utilizar aspas duplas ou aspas simples?
/*Utiliza-se aspas duplas, quando dentro do texto eu preciso usar aspas simples,
para assim meu código não dar nenhum erro*/
console.log("Marcos 'Henrique'")

/*Utiliza-se aspas simples, quando dentro do texto eu preciso usar aspas duplas,
para assim meu código não dar nenhum erro*/
console.log('Marcos "Henrique"')

/*Já as crazes (template strings), são utilizadas não só quando usamos aspas duplas e simples dentro do texto,
mais também quando temos um texto multi linhas. 
Também é permitido expressões de linguagem dentro das crazes.
Ele apresentara o texto corretamente sem nenhum problema*/
console.log(`Marcos
Henrique
Ferreira
de
Sousa ${1 + 2}`)