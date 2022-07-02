const fs = require("fs");


function read() {
    if (fs.existsSync("baseDeDatos.json") == false) {
        console.log('Base de datos creado')
        fs.writeFileSync("baseDeDatos.json", JSON.stringify([], null, 4));
    }
    return JSON.parse(fs.readFileSync("baseDeDatos.json", 'utf-8'));

}

module.exports = read;