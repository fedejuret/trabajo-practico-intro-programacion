const read = require("./read")
const write = require("./write");

const deleteBook = (id) => {
    let books = read()
    if (books.some(e => e.id == id)) {
        console.log(`Se eliminó correctamente el libro ${process.argv[3]}`)
        write(books.filter(book => book.id != id));
    }
    else{
        console.log("No se encuentra el id solicitado")
    }
}


module.exports = deleteBook;

