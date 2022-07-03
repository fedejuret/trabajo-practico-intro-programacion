const fs = require ('fs');

function read() {
    if(fs.existsSync('./books_data.json') == false) {
        fs.writeFileSync('./books_data.json', JSON.stringify([], null, 4))
        console.log('No existe')
    }else{
        return JSON.parse(fs.readFileSync("./books_data.json", "utf-8"))
    }
}

module.exports = read