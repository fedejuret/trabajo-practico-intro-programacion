const fs = require('fs')

const write= (data) => fs.writeFileSync('./booksDatabase.json',JSON.stringify(data, null, 4));

module.exports= write;