const read = require('./CRUD/read');
const create = require('./CRUD/new');
const editBook = require('./CRUD/edit');
const deleteBook = require('./CRUD/delete');

const action = process.argv[2];

switch(action) {
    case 'read':
        console.log(read);
        break;
    case 'new': 
        var titulo = process.argv[3];
        var autor = process.argv[4];
        var genero = process.argv[5];
        var anio = process.argv[6];
        var costo = process.argv[7];
        var precio = process.argv[8];
        create(titulo, autor, genero, anio, costo, precio);
        break;
    case 'edit':
        editBook(process.argv[3],process.argv[4],process.argv[5],process.argv[6],process.argv[7],process.argv[8],process.argv[9]);
        break;
    case 'delete':
        var titulo = process.argv[3];
        deleteBook(titulo);
        break;
    default:
        console.log("Ninguna de las acciones encontrada");
        break;
}