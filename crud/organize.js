
const read = require('../crud/read');
//console.log("hola")
const writeJson = require('./writeJson.js');

function organize() {
    //console.log("como va")
    let array = read();
    for (let i = 0; i < array.length;i++) {
        if (array[i].id) {
            //console.log(i)
            array[i].id = i +1;
        }
    }
    writeJson(array);
}
//console.log(llegue);
organize()
module.exports = organize;
