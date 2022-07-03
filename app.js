const create = require("./CRUD/new");
const read = require("./CRUD/read");
const deleteBook = require("./CRUD/delete");
const edit = require("./CRUD/edit");



const action = process.argv[2];
let books = read()
switch(action) {

    case "new":
        create(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7],process.argv[8])
        console.log(`Se agregó un nuevo libro: "${process.argv[3]}" a la base de datos`);
        break;

    case "read":
        console.log("Esta es nuestra lista de libros:");
        console.log(books);
        break;

    case "edit":
        edit();
            break;

        case "delete":
            deleteBook(process.argv[3]);
            break;


    default:
        console.log("No se reconoce la acción solicitada")


}