const read = require('./read');
const fs = require('fs')

const create = (titulo, autor, genero, año, valor, venta) => {
    const array = read()
    const largo = array.length
    let newId = ''
    if (array[largo - 1]) {
        console.log('existe');
        newId = array[largo - 1];
    } else {
        console.log('no existe');
        newId = { id: 0 }
    }
    let object = {
        id: newId.id + 1,
        title: titulo,
        author: autor,
        genre: genero,
        year: año,
        spend: `$${valor}`,
        sell: `$${venta}`
    }
    array.push(object);
    fs.writeFileSync("baseDeDatos.json", JSON.stringify(array, null, 4))

    return console.log(`Se creo correctamente el libro: ${titulo}`);
}

// create("Harry Potter", "JK Rowling", "Fantasy", 1995, 2000, 4000)
// create("Pelado", "JK Rowling", "Fantasy", 1995, 2000, 4000)
module.exports = create;