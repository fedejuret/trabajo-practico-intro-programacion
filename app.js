const read = require('./crud/read.js');
const create = require('./crud/create.js');
const organize = require('./crud/organize.js');
const borrarTarea = require('./crud/delete.js');
const updateBooks = require('./crud/edit.js');

let action = process.argv[2];

// let id = process.argv[3];
// //let organiz=process.argv[3];
// let title = process.argv[3];
// let author = process.argv[4];
// let genre = process.argv[5];
// let year = process.argv[6];
// let cost = process.argv[7];
// let price = process.argv[8];

switch (action) {
    case 'read':
        console.log(organize(), read());
        break;
    case 'new': 
        const titleNew = process.argv[3];
        const authorNew = process.argv[4];
        const genreNew = process.argv[5];
        const yearNew = process.argv[6];
        const costNew = process.argv[7];
        const priceNew = process.argv[8];

        console.log(organize(), create(titleNew, authorNew, genreNew, yearNew, costNew, priceNew));
        break;
    case 'organisa':
        console.log(organize());
        break;
    case 'delete':
        const idDelete = process.argv[3];
        console.log(organize(), borrarTarea(idDelete));
        break;
    case 'edit':
        const idEdit = process.argv[3];
        const titleEdit = process.argv[4];
        const authorEdit = process.argv[5];
        const genreEdit = process.argv[6];
        const yearEdit = process.argv[7];
        const costEdit = process.argv[8];
        const priceEdit = process.argv[9];
        console.log(organize(), updateBooks(idEdit,titleEdit,authorEdit,genreEdit,yearEdit,costEdit,priceEdit));
        break;
}