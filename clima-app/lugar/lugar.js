const axios = require('axios');


const getLugarLatLng = async(direcion)=>{


    let encodeURL = encodeURI( direcion)
let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)


if(resp.data.status==='ZERO_RESULTS'){

    throw new Error(`No hay resultado para la ciudad ${direcion}`)

}

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return{
        direcion:location.formatted_address,
        lag:coors.lat,
        lng:coors.lng
    }

}

module.exports ={
    getLugarLatLng
}



