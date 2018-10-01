console.log('geocode starting');
const request = require ('request');
// var encodedAddress = encodeURIComponent(argv.a);
// var API_key = 'AIzaSyCz1Cydq-nwDE99Wdxu8IjR2-_LHkBx6L0';

geocode =(address, key, callback) => {
    request({
        url : `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`,
        json : true,
        },(error, response, data) => {
        if(error){
            callback('Unable to connect to the Google servers.')
        }
    
        else if (response.body.status === 'ZERO_RESULTS'){
            callback('Unable to fecth that address')
            
        }
        else if (response.body.status === 'OK'){
        // console.log(JSON.stringify(data, undefined, 1));
            callback(undefined, {
                address: data.results[0].formatted_address,
                latitude: data.results[0].geometry.location.lat,
                longitude: data.results[0].geometry.location.lng
            });
        // console.log(data.results[0].formatted_address);
        // console.log(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng );
        // // console.log(error);
        }
    
        
        
    })
}

module.exports.geocode = geocode;
