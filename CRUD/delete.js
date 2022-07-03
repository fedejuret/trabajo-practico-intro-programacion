const read = require('./read.js');
const write = require('./write.js');

let lista = read()

const deleteBooks = (id) => {
    const excludedBooks = lista.filter(element => element.id != id);

    write(excludedBooks);
}

module.exports = deleteBooks