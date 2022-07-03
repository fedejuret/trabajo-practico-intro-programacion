const read = require('./CRUD/read');
const create = require('./CRUD/carge');
const deleteBooks = require('./CRUD/delete')
const updateBooks = require('./CRUD/update')

const action = process.argv[2];

switch(action) {
    case 'read':
        console.log("Lectura", read());
        break;
    case 'new': 
        var title = process.argv[3];
        var author = process.argv[4];
        var genre = process.argv[5];
        var year = process.argv[6];
        var cost = process.argv[7];
        var price = process.argv[8];
        create(title, author, genre, year, cost, price);
        break;
    case 'update':
        var id = process.argv[3];
        var title = process.argv[4];
        var author = process.argv[5];
        var genre = process.argv[6];
        var year = process.argv[7];
        updateBooks(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7]);
        break;
    case 'delete':
        var id = process.argv[3];
        deleteBooks(id);
        break;
}