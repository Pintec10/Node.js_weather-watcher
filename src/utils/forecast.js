const request = require('request');


const forecast = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/2e498995c72f1e701acbb86f40827f92/${latitude},${longitude}?units=si`;
    request({ url, json: true }, (error, { body: { error: respError, daily, currently } }) => {
        if (error) {
            callback('Something went wrong while trying to fetch weather data, try to check your connection.', undefined);
        } else if (respError) {
            callback(respError, undefined);
        } else {
            let output = {
                dailySummary: daily.summary,
                currentTemperature: currently.temperature,
                currentPrecipProbability: currently.precipProbability,
                temperatureHigh: daily.data[0].temperatureHigh,
                temperatureLow: daily.data[0].temperatureLow
            }
            callback(undefined, output);
        }
    })
}


module.exports = forecast;