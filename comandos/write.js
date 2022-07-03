
const fs = require("fs");

function write(datos){
 
    return fs.writeFileSync("./libreria.json", JSON.stringify(datos,null, 4)) //leo el json y lo convierto en string

}


module.exports = write  //exporto modulo