const read = require('../FunctionsBase/readFile');
const write = require('../FunctionsBase/writeFile');

const chargebook = (title, author, genre, year, coast, price) => {

    let books = read();
    console.log(books)

    let newBooks = {
        id: books.length + 1,
        title: title,
        author: author,
        genre: genre,
        year: year,
        coast: coast,
        price: price

    };
    //console.log(newBooks)

    books.push(newBooks),

        write(books)

    console.log(`New Book uploaded ${title}`)

}


chargebook('gamorra', 'leandro', 'drama', 2021, 255, 300)
// module.exports = chargebook;