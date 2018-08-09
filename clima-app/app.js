//const axios = require('axios');

const lugar =  require('./lugar/lugar');

const argv= require('yargs').options({ //configuracion de yargs
direccion:{
    alias: 'd',
    desc: "Direccion de la ciudad para obtner el clima",
    demand: true

}
}).argv;

lugar.getLugarLatLng(argv.direccion)
.then(resp =>{
    console.log(resp);
    
})
.catch(e => console.log(e));


//console.log(argv.direccion);

