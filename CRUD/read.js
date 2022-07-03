const fs = require ('fs');

/*
    Esta funcion pregunta al sistema si existe el archivo BooksBaseDatos.json, si no encuentra el archivo lo crea,
    y si exite el archivo BooksBaseDatos.json no va a ejecutar el codigo return 
    (que nos devuelve el archivo parseado).
*/
function read(){
    if(fs.existsSync("BooksBaseDatos.json")== false){
        fs.writeFileSync("BooksBaseDatos.json" , JSON.stringify([] , null , 4))
    }else{
        return JSON.parse(fs.readFileSync("BooksBaseDatos.json", "utf-8"))
    }
}





module.exports = read()


