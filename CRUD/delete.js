const read = require('./read.js');
const write = require('./write.js');

let libro = read();
const deleteID = (id) => {
    write(libro.filter((book) => book.id != id))
    return console.log(`Se eliminio correctamente el libro: ${id}`);

}



module.exports = deleteID;