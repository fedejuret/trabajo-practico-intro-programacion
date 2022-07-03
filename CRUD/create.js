
const read = require('./read');

const write = require('./writeJSON');



const create = (title , author, genre, year, cost, price) => {

    let array = read ;

    let newCarga= {
        id: array.length + 1,
        title: title,
        author: author,
        genre: genre,
        year: year,
        cost: cost,
        price: price,
    };

    array.push(newCarga);

    write(array);

}
module.exports = create;



