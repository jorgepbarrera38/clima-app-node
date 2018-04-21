const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        descripcion: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async()=>{
    try {
        let coors = await lugar.getLugarLatLong(argv.direccion);
    let climafinal = await clima.getClima(coors.latitud, coors.longitud);
    return `El clima en ${ coors.direccion } es de ${ climafinal }`
    } catch (error) {
        return `No se pudo determinar el clima en ${ argv.direccion }`
    }
};

getInfo().then(resp=>{
    console.log(resp);
});


