const books = require('./read');
const write = require('./writeJSON');
const create = (titulo, autor, genero, anio, costo, precio) =>{
    const newBook = {
        title: titulo,
        author: autor,
        genre: genero,
        year: anio,
        cost: costo,
        price: precio
    }
    for(let ID = 0; ID <= books.length; ID++){
        newBook.id = ID;
}
    books.push(newBook);
    write(books);
}
module.exports = create;