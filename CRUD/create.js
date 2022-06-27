const read = require('./read');
const write = require('./write');

const create = (titulo, autor, genero, año, valor, venta) => {
    let array = read()
    console.log(array)
    let object = {
        id:     array.length + 1,
        title:  titulo,
        author: autor,
        genre:  genero,
        year:   año,
        spend:  `$${valor}`,
        sell:   `$${venta}`
    }
    array.push(object);
    
    // console.log(array)

    write(array);
    
    
    console.log(`Se creo correctamente el libro: ${titulo}`);
}


module.exports = create;


