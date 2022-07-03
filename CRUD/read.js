const fs = require("fs");


function read(){
    if(fs.existsSync("booksDatabase.json") == false){
        fs.writeFileSync("booksDatabase.json",JSON.stringify([], null, 4));
    }else{
        
        return JSON.parse(fs.readFileSync("booksDatabase.json", 'utf-8'));
    }
}

module.exports = read;