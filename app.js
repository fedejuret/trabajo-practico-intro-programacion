const read = require('./FunctionsBase/readFile');
const create = require('./CRUD/chargeBook');
const organized = require('./FunctionsBase/organized');



let accion = process.argv[2];
let id = process.argv[3];
let title = process.argv[3];
let author = process.argv[4];
let Gender = process.argv[5];
let Year = process.argv[6];
let Cost = process.argv[7];
let Price = process.argv[8];

switch (accion) {

    case 'read':

        console.log(organized(), read());
        break;

    case 'new':

        console.log(create(process.argv[3],
            process.argv[4],
            process.argv[5],
            process.argv[6],
            process.argv[7],
            process.argv[8]), organized());
        break;


}