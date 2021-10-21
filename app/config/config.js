{
    module.exports = {
        apiKey : process.env.API_KEY,
        urlApiIp: process.env.URL_API_WEATHER || 'http://ip-api.com/json/',
        urlApiWeather: process.env.URL_API_IP || 'https://api.openweathermap.org/data/2.5'

    }
}