const fs = require('fs');

const write = data => {
    fs.writeFileSync('./booksData.json', JSON.stringify(data));
}
module.exports = write;