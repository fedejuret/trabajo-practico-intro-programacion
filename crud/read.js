const fs=require('fs');
function read(){
    if(fs.existsSync("inventario.json")==false){
        fs.writeFileSync("inventario.json",JSON.stringify([],null,4))
    }else{
        return JSON.parse(fs.readFileSync("inventario.json","utf-8"))
    }
}

// let data=fs.readFileSync('./inventario.json','utf-8');

module.exports=read;
//console.log(read);