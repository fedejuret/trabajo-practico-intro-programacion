const readi= require('./read');
const writeJsoon = require('./writeJson');

let books=readi()
const updateBooks=(id,title,author,genre,year,cost,price) => {

    const booksUpdate = books.map(Element => {
       if( Element.id==id){
        Element.title= title,
        Element.author=author,
        Element.genre=genre,
        Element.year=year,
        Element.cost=cost,
        Element.price=price,
        console.log(`se modificaron los datos del libro ${id} del inventario`)
    }
        return Element;
        
    })
    writeJsoon(booksUpdate);
    }
//updateBooks();  

module.exports=updateBooks;