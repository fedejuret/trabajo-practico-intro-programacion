const fs = require('fs');
let data = fs.readFileSync('./booksData.json', 'utf-8');
module.exports = JSON.parse(data);