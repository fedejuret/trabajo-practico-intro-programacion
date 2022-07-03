const books = require('../booksData');

function booksContains(titulo) {
    
    let inBooks = [];

    for (let i = 0; i < books.length; i++) {

        if (books[i].titulo.toLowerCase().includes(titulo.toLowerCase())) {
            inBooks.push(books[i]);
        }
    }

    return inBooks;

}

module.exports = booksContains;