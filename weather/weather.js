const request = require('request');
const API_key = 'b56c94a87a0c9964f1d51b159a9bd875'

getWeather = (lat, long, callback) => {
    request({
    url: `https://api.darksky.net/forecast/${API_key}/${lat},${long}`,
    json: true
    },
    (err, res, data)=>{
        if(!err && res.statusCode===200){
            callback(undefined, {
                apparentTemperature: data.currently.apparentTemperature,
                temperature: data.currently.temperature
            })
        } else if(err){
             callback(err);
        }
    });
}

module.exports.getWeather = getWeather;