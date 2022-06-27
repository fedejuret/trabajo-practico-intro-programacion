const read = require('./CRUD/read');
const create = require('./CRUD/create');
const organize =require('./CRUD/organizeList');
const deleteID = require('./CRUD/delete');
const edit = require('./CRUD/edit');
// const tagsBook = require('./console.Tags');se intento importar todos los process para siomplificar la app

let action = process.argv[2];
let titulo = process.argv[3];
let autor  = process.argv[4];
let genero = process.argv[5];
let año    = process.argv[6];
let valor  = process.argv[7];
let venta  = process.argv[8];
let id     = process.argv[3];
// let tags = tagsBook;No funciono
switch(action){
    case "read":
        organize(),console.log("Solo Lectura"),console.log(read());
        break;
    case "new":
        organize(), create(titulo,autor,genero,año,valor,venta);
        break;
    case "delete":
        deleteID(id),organize();
        break;

    case "edit":
        edit();
    }



