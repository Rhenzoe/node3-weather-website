// const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }

// module.exports = forecast


const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    // const url = 'http://api.weatherstack.com/current?access_key=307f9b1687ee33fdcd7eb84ccd71ad59&query='+ latitude +','+ longitude + '&units=f'
    const url = 'http://api.weatherstack.com/current?access_key=307f9b1687ee33fdcd7eb84ccd71ad59&query='+ latitude +','+ longitude
    request({ url, json: true }, (error, {body}) => {
        // const currentt = {
        //     weatherDescript: response.body.current.weather_descriptions[0],
        //     temperature: response.body.current.temperature,
        //     feelsLikee: response.body.current.feelslike 
        // }
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            //const forecastData = currentt.weatherDescript+ '. It is currently ' + currentt.temperature + ' degress out. It feels like ' + currentt.feelslikee + ' degrees out.'
            //callback(undefined, forecastData)
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degrees out.' + 'The humidity is ' + body.current.humidity +'%.')
            
        }
    })
}

module.exports = forecast