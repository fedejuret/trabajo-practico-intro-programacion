const read = require('../FunctionsBase/readFile');
const write = require('./chargeBook');


const books = read();


const bookEdit = (id, title, author, Gender, Year, Cost, Price) => {

  const updatebook = books.map(book => {
    if (books.id == id) {
      books.title = title;
      books.author = author;
      books.Gender = Gender;
      books.Year = Year;
      books.Cost = Cost;
      books.Price = Price
    }

    return book;

  });

  write(updatebook);



}

bookEdit(3, '', 'alexis', 'drama', 2010, 20, 20);

//module.exports = bookEdit;