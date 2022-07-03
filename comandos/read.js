
 const fs = require('fs');

function read(){  //funcion leer

    if (fs.existsSync("libreria.json") == false){ //si no existe false
        console.log("crear base de datos")
        return fs.writeFileSync("libreria.json",JSON.stringify([], null, 4))// si no existe crear json con array

    }else{
          console.log("lectura")
        console.log(JSON.parse(fs.readFileSync("libreria.json", "utf-8"))) // si existe leerlo
    }

}

console.log(read()); //llamo a la funcion

module.exports =read

