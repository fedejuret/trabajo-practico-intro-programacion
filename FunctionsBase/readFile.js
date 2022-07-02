const fs = require('fs');

function readBooksDataBase() {

  if (fs.existsSync('dataBaseBooks.json') == false) {

    console.log('Data Base Craete');
    fs.writeFileSync('dataBaseBooks.json', JSON.stringify([], null, 4));

  }
  //console.log(fs.existsSync('dataBaseBooks.json'))
  return JSON.parse(fs.readFileSync('dataBaseBooks.json', 'utf-8'));

}

console.log(readBooksDataBase());
module.exports = readBooksDataBase;