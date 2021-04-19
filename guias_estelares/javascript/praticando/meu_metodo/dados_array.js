/*
    Buscando e contando dados em Arrays

    Baseado no Array de Livros por Categoria abaixo, 
    faça os seguintes desafios:

        * Contar o número de categorias e o número de Livros
        em cada categoria
        * Contar o número de autores
        * Mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber
        o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

let totAuthors = 0
let totAuthor = []
let booksAugusto = []

// Metodo para determinar a quantidade de categorias.
let category = booksByCategory.length - 1
// let categorys = 0
let categoryBook = []

for(obj = 0; obj <= category; obj++) {
    // Separando cada categoria do array para ser processada
    let objeto = booksByCategory[obj]
    // console.log(objeto)

    // Coletando os livros cadastrados de cada categoria
    let books = objeto.books
    // console.log(books)

    // Quantidade de Livros dentro da categoria
    let qtdBook = books.length - 1
    
    // Contador de livros da categoria
    let contador = 0

    for(title = 0; title <= qtdBook; title++) {
        // Separando os livros cadastrados
        titles = books[title]
        // console.log(titles)
        // Coletando e separando os nomes dos autores de cada livro
        author = titles.author
        // console.log(author)

        // Contador de livros da categoria
        contador++

        // Verificando se o nome do author já foi adicionado a lista e contando
        // a quantidade de autores
        let testeAuthor
        testeAuthor = totAuthor.indexOf(author)
        if (testeAuthor < 0) {
            totAuthor.push(author)
            totAuthors++
        }

        let augusto = author == 'Augusto Cury'
        // console.log(totAuthor)
        // console.log(augusto)

        if(augusto) {
            book = titles.title
            // console.log(book)
            booksAugusto.push(titles.title)
        }
        
    }
    // categorys++
    categoryBook.push(contador)
    // Mostrando quantos livros tem cada categoria
    console.log(`Categoria ${objeto.category} tem quantos livros? ${categoryBook[obj]}`)
}
// Adicionando mais 1 para a variavel retornar ao valor original
category += 1
// Mostrando total de categorias
console.log(`Quantas categorias existem? ${category}`)
console.log(`Quantos autores estão na lista? ${totAuthors}`)
console.log(`Quais livros são do Augusto Cury? ${booksAugusto}`)

function authorBooks(nameAuthor) {
    let booksAuthor = []
    category -= 1

    for(obj = 0; obj <= category; obj++) {
        // Separando cada categoria do array para ser processada
        let objeto = booksByCategory[obj]

        // Coletando os livros cadastrados de cada categoria
        let books = objeto.books
    
        // Quantidade de Livros dentro da categoria
        let qtdBook = books.length - 1
    
        for(title = 0; title <= qtdBook; title++) {
            // Separando os livros cadastrados
            titles = books[title]

            // Coletando e separando os nomes dos autores de cada livro
            author = titles.author
    
            // Verificando se o nome do author já foi adicionado a lista e contando
            // a quantidade de autores
            let testeAuthor
            testeAuthor = totAuthor.indexOf(author)
            if (testeAuthor < 0) {
                totAuthor.push(author)
                totAuthors++
            }
    
            let name = author == nameAuthor
    
            if(name) {
                book = titles.title
                booksAuthor.push(titles.title)
            }
            
        }
    }
    return booksAuthor
}

console.log(authorBooks('George S. Clason'))