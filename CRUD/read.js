const fs = require("fs");


function read () {
    if(fs.existsSync("Books_DB.json") == false){
        console.log('Base de datos creado')
        fs.writeFileSync("Books_DB.json",JSON.stringify([], null, 4));
    }
        
        return JSON.parse(fs.readFileSync("Books_DB.json", 'utf-8'));
    
}

module.exports = read;