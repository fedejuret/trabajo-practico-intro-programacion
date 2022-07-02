const fs = require('fs');

function write(datos) {
    return fs.writeFileSync('./dataBaseBooks.json', JSON.stringify(datos, null, 4));
}


module.exports = write;