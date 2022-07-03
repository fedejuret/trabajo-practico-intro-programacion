const books = require('./read');
const write = require('./writeJSON');

const editBook = (ID, titulo, autor, genero, anio, costo, precio) =>{
    const editedBooks = books.map(book =>{
        if(book.id == ID){
            book.title = titulo;
            book.author = autor;
            book.genre = genero;
            book.year = anio;
            book.cost = costo;
            book.price = precio;
        }
        return book;
    });
    write(editedBooks);
}
module.exports = editBook;