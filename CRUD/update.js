const read = require('./read');
const write = require('./write');

let lista = read()

const updateBooks = (id, title, author, genre, year) => {
    const updatedBooks = lista.map(book => {
        if (book.id == id) {
            book.title = title;
            book.author = author;
            book.genre = genre;
            book.year = year;
        }
        return book;

    });

    write(updatedBooks);
}

module.exports = updateBooks