const fs = require('fs');
// if(fs.fileExist())

const writeJSON = (data) =>{
    fs.writeFileSync('./BooksBaseDatos.json', JSON.stringify(data));

}

module.exports = writeJSON;
