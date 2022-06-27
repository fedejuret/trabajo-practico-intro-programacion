const read = require('./read.js');
const write = require('./write.js');

// let libro =read();
// const deleteID = (id) => {
//         if (write(libro.filter((book) => book.id != id)))
//             return console.log(`Se eliminio correctamente el libro: ${id}`);
        
        

// }

//     module.exports = deleteID; (codigo viejo con bucle eliminado el id)

const deleteBook = (id) => {
    let book = read();
    if (book.some(e => e.id == id)) {
        write(book.filter(book => book.id != id));
        console.log(`Se elimino correctamente el libro ${process.argv[3]}`)
    }else{
        console.log(`No se ha encontrado el libro con el id ${id}`)
    }
    }
module.exports = deleteBook