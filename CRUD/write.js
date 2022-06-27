const fs = require('fs');

function write (datos) {
    return fs.writeFileSync("Books_DB.json", JSON.stringify(datos, null, 4));
    
}

// console.log(write([]));Cuidado no usar CL!!!!

module.exports = write;

