const geocode = require('./utils/geocode')
const forecast= require('./utils/forecast')

const summary = (location) => {
    geocode(location, (error, { latitude, longitude, location}) => {
        if(error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return console.log(error)
            }
            console.log('Location:', location)
            console.log('Summary:', forecastData.summary)
            console.log('temperature:', forecastData.temperature)
            console.log('chance of rain:', forecastData.rainChance)
        })
    })
    return 0
}

module.exports = {summary: summary}