const read = require("./read")
const write = require("./write");


const action = process.argv[4]
let edit = () => {
    let books = read();
    books.forEach(function(book){
        if(book.id == process.argv[3]){
            switch(action){
                case "title":
                    book = book;
                    book.title = process.argv[5];
                    console.log(`Se editó correctamente el libro "${book.title}"`)
                break;
                case "author":
                    book = book;
                    book.author = process.argv[5]
                    console.log(`Se editó correctamente el libro "${book.title}"`)
                break;
                case "genre":
                    book = book;
                    book.genre = process.argv[5]
                    console.log(`Se editó correctamente el libro "${book.title}"`)
                break;
                case "year":
                    book = book;
                    book.year = process.argv[5]
                    console.log(`Se editó correctamente el libro "${book.title}"`)
                break;
                case "price":
                    book = book;
                    book.price = process.argv[5]
                    console.log(`Se editó correctamente el libro "${book.title}"`)
                break;
                case "cost":
                    book = book;
                    book.cost = process.argv[5]
                    console.log(`Se editó correctamente el libro "${book.title}"`)
                break;
                default:
                    console.log("No se reconoce esa característica.")
            }
        }
            }
        )    
        write(books);
    }
    module.exports = edit;