const read = require('../FunctionsBase/readFile');
const write = require('../FunctionsBase/writeFile');
const organized = require('../FunctionsBase/organized');

const deletebook = id => {
    const books = read();

    write(books.filter(book => book.id != id), organized())// simplificada

}

deletebook(2)

module.exports = deletebook