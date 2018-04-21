const axios = require('axios');

let getLugarLatLong = async(direccion) => {

    let encodeUrl = encodeURI(direccion);
    
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyAW1p-ZYE1EHzZ-M22humpm0bNgJ31hd9U`;
    let resp = await axios.get(url)
    
    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }

    let data = resp.data.results[0]
    
    return {
        direccion: data.formatted_address,
        latitud: data.geometry.location.lat,
        longitud: data.geometry.location.lng
    }
}

module.exports = {
    getLugarLatLong
}