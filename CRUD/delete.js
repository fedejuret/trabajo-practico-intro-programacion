const read = require('./read');
const write = require ('./writeJSON')



const deleteBook = (id) => {

    write(read.filter(task => task.id != id ))
};


/*
  Esta funcion organiza la base de datos(BooksBaseDatos.json)
  una vez que eliminemos un objeto dentro del JSON.
*/
function organize(){
    let array = read;
    for (let i = 1; i < array.length; i++){
        if(array[i].id){
            array[i].id = i +  1
        }
    }
    write(array);
}

organize();
module.exports = organize;

module.exports = deleteBook;