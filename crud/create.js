
const read = require('../crud/read.js');
const write = require('../crud/writeJson');

const create= (titulo, autor, genero, año, costo, precio)=> {
   
  let array=read()

    let newDesc = {
        id:array.length+1,
        title:titulo,
        author:autor,
        genre:genero,
        year:año,
        cost:costo,
        price:precio,
    };
    
    array.push(newDesc);

    //console.log(newDesc);
    write(array);
    return(console.log(`se ha añadido el libro ${titulo} al inventario`))
  }
//create("el señor de los anillos", "tolkien" ,"fantasia" ,"1960", "200" ,"500")
module.exports = create;