const read = require('./CRUD/read')
const create = require('./CRUD/create')
const deleteID = require('./CRUD/delete');
const edit = require('./CRUD/edit');

let action = process.argv[2];
let titulo = process.argv[3];
let autor = process.argv[4];
let genero = process.argv[5];
let año = process.argv[6];
let valor = process.argv[7];
let venta = process.argv[8];
let id = process.argv[3];

switch (action) {
    case "read":
        'Solo lectura', read();
        break;
    case "create":
        console.log(create(titulo, autor, genero, año, valor, venta));
        break;
    case "delete":
        deleteID(id);
        break;

    case "edit":
        edit();
}