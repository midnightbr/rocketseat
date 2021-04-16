let number = 0
console.log(number)


// var - var é global e local
// hoisting
console.log('> existe x antes do bloco? ', x)
{
    var x = true
}
console.log('> existe x depois do bloco? ', x)


// let e const
// const e let são locais e só funcionam no escopo onde foi criada
// console.log('> existe y antes do bloco? ', y)
{
    let y = true
    console.log('> existe y dentro do bloco? ', y)
}
// console.log('> existe y depois do bloco? ', y)

const y = true
{
    const y = false
    console.log('Vai dar erro? ', y)
}
console.log('Funcionou? ', y)