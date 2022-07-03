const read = require('./CRUD/read');
const create = require('./CRUD/create');
const deleteBook = require('./CRUD/delete');
const editBook = require('./CRUD/updata');




const accion = process.argv[2];


switch(accion){
    case 'new' :
        var title = process.argv[3];
        var author = process.argv[4];
        var genre = process.argv[5];
        var year = process.argv[6];
        var cost = process.argv[7];
        var price = process.argv[8];
        create(title, author, genre, year, cost, price);
        break;
    case 'read':
        console.log(read);
    case 'delete' :
        var id = process.argv[3];
        deleteBook(id);
        break;
    case 'edit' :
        var id = process.argv[3];
        var title = process.argv[4];
        var author = process.argv[5];
        var genre = process.argv[6];
        var year = process.argv[7];
        var cost = process.argv[8];
        var price = process.argv[9];
        editBook(id, title, author, genre, year, cost, price);
        break;    

        
}