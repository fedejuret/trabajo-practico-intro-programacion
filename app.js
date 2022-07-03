const read = require("./comandos/read");
const create = require("./comandos/create");



switch(action){
    case "read":
        console.log(read);
    break;
    case "new":
        let id= process.arg[3]     //id
        let titulo = process.argv[3]    //titulo
        let author = process.argv[4]   //autor
        let genre =process.argv[5]   //genero
        let year = process.argv[6]   //año
        let cost=  process.argv[7]    //compra
        let price= process.argv[8]    // acciones a realizar escritas por consola
        create(id,titulo,author,genre,year,cost,price)
 
    break;
}




