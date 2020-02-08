const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/1ae46da8552d31ef1f5a6535e1c9d337/' + latitude + ',' + longitude

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to forecast services', undefined)
        } else if(response.body.error) {
            callback('Unable to find location. Try again', undefined)
        } else {
            callback(undefined, {
                summary: response.body.daily.data[0].summary,
                temperature: response.body.currently.temperature,
                rainChance: response.body.currently.precipProbability
            })
        }
    })
}

module.exports = forecast