const books = require('./read');
const write = require('./writeJSON');

const deleteBook = ID => {

    write(books.filter(book => book.id != ID));
};

module.exports = deleteBook;