const read = require('./read.js')
const write = require('./write.js')

let carge = (title, author, genre, year, cost, price) => {
    
    let lista = read()

    var id = 1
    if(lista.length > 0) {
        id = lista[lista.length - 1].id + 1
    }
    
    let new_book = {
        id: (id),
        title: title,
        author: author,
        genre: genre,
        year: year,
        cost: cost,
        price: price
    }

    lista.push(new_book);
    
    write(lista);
}

module.exports = carge;