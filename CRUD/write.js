const fs = require ('fs');

function write(datos) {
    return fs.writeFileSync('./books_data.json', JSON.stringify(datos, null, 4))
}

module.exports = write