

const read = require("./read");
const write = require("./write");

const create = (id,titulo,autor,genero,año,compra,venta) => {

let array = read()

}
 
let libro = {
    id: "id",
    title: "titulo",
    author: "autor",
    genre: "genero",
    year: "año",
    cost: "compra",
    price: "venta"
 

}

console.log(libro)

array.push(libro) //no lo puedo pushear al array 

console.log(array) //imprimo el array

create("1","el loco", "gibran", "novela", "1420", "500", "700")



write(array)  //sobre escribo

module.exports= create