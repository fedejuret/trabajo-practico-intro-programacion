
const read =require("./read");
const write =require("./write");

function indice(){
    let array=read();

for (let i=1; i < array.length; i++){

if (array[i].id){

    array[i].id = i+1
}

write(array)
}


}

module.export = indice