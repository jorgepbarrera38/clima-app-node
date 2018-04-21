const axios = require('axios');

const getClima = async(latitud, longitud) => {
    var url = `http://api.openweathermap.org/data/2.5/weather?lat=${ latitud }&lon=${ longitud }&appid=d7b977b949a94680e5c6e5b6f6f1c7d2&units=metric`
    var resp = await axios.get(url);
    if(resp.cod == 400){
        throw new Error('NO existe ese datos');
    }
    return resp.data.main.temp;
    
}

module.exports = {
    getClima
}