# Scope
* Escopo determina a visibilidade de alguma variável no JS

# Block statement
```js
// Vamos iniciar um bloco
{
    // Aqui dentro é um bloco e posso colocar qualquer código.
} // Aqui fechamos o bloco
```
O bloco, também criará um novo escopo. Chamamos de `block-scoped`

## Var
```js
//Var é global e poderá funcionar fora de um escopo de bloco
console.log('> existe x antes do bloco? ', x)
{
    var x = 0
}
console.log('> existe x depois do bloco? ', x)
```

## Let e Const
```js
// const e let são locais e só funcionam no escopo onde foi criada
console.log('> existe y antes do bloco? ', y)
{
    let y = true
}
console.log('> exite y depois do bloco? ', y)