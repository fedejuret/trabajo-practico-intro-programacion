const read = require("./read")
const write = require("./write");




const create = (title, author, genre, year, cost, price) => {
    let books = read()
    let newBook = {
        id: 0.5, // Esto lo hice para no crear otro archivo para ordenar los id, pero no se por qué lo tuve que hacer con 0.5... Si ponía 1 me saltaba de a 2 en 2 
        title: title,
        author: author,
        genre: genre,
        year: year,
        cost: cost,
        price: price
    }
    books.push (newBook);
    books.forEach( function(book){
        let newid = book.id + 0.5; // Acá sigue el flash
        newBook.id = newid;
    });
    write(books);  
}



module.exports = create;

