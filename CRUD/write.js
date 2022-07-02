const fs = require('fs')

function write(datos){
    if(fs.existsSync("baseDeDatos.json")==false){
        fs.writeFileSync("baseDeDatos.json", JSON.stringify(datos, null, 4))
    }else{
        fs.writeFileSync("baseDeDatos.json", JSON.stringify(datos, null, 4))
    }
}


module.exports = write