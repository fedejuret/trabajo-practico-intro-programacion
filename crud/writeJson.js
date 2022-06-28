const fs=require('fs');

function write(bookks) {
    return fs.writeFileSync("inventario.json",JSON.stringify(bookks,null,4))
    }
    
//fs.writeFileSync('./inventario.json',JSON.stringify(books));

module.exports=write;
//console.log(write([]));