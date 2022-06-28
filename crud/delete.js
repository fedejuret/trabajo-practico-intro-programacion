
const inventario= require('../inventario.json')
const writeJson= require('./writeJson')

const borrarTarea=id => {

     writeJson(inventario.filter(inventario=>inventario.id!=id));
     console.log(`se ha borrado el libro numero ${id} del inventario`)
    

}
//borrarTarea(1);
module.exports=borrarTarea;
