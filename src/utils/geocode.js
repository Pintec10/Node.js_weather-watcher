const request = require('request');


const geocode = (address, callback) => {
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicGludGVjMTAiLCJhIjoiY2s3eXc3eGpqMDA1azNocG1qNG10NTJybSJ9.2j0JeiOXbD1NxHs4H-pmZw&limit=1';
    request({ url: geoUrl, json: true }, (error, { body: { features, message } }) => {
        if (error) {
            callback('Something went wrong while trying to find the requested location, try to check your connection.', undefined);
        } else if (!features && message) {
            callback(`${message}`, undefined);
        } else if (features.length === 0) {
            callback('It was not possible to find the requested location. Check if it is correct or try to give more details.', undefined);
        } else callback(undefined, {
            latitude: features[0].center[1],
            longitude: features[0].center[0],
            location: features[0].place_name
        })
    })
}


module.exports = geocode;