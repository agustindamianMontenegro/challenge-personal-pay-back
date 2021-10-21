const service = require('./../services/weather-api-service')
const config = require('./../config/config')


/*
filtra climas de diferentes dias retornando un lista con 6 climas sin dias repetidos
*/
const filterOnlyFiveWeather = (clima, index, array) => {
    if (index === 0) {
        return clima
    } else {
        return array[index - 1].dt_txt.split(' ')[0] !== clima.dt_txt.split(' ')[0] ? clima : null
    }
}


/*
retorna clima actual segun lat y lon
*/

const getWeather = async (lat, lon) => {
    try {
        const response = await service.getWeather(lat, lon);
        return response;
    } catch (e) {
        throw new Error(e);
    }
}


/*
retorna clima actual segun city 
*/
const getWeatherWithCity = async (city) => {
    try {
        const response = await service.getWeatherWithCity(city);
        return {
            weatherWeek: response,
            city: response.name
        }
    } catch (e) {
        throw new Error(e);
    }
}


/*
retorna clima de 6 dias incluyendo el actual y 5 dias seguidos segun city
*/
const getWeatherWeekCity = async (city) => {
    try {
        const response = await service.getWeatherWeekCity(city);
        const weather = response.list.filter(filterOnlyFiveWeather);
        return {
            weatherWeek: weather,
            city: response.city
        }
    } catch (e) {
        throw new Error(e);
    }
}

/*
retorna clima de 6 dias incluyendo el actual y 5 dias seguidos segun ip
*/
const getWeatherWeek = async (lat, lon) => {
    try {
        const response = await service.getWeatherWeek(lat, lon);
        const weather = response.list.filter(filterOnlyFiveWeather);
        return {
            weatherWeek: weather
        }
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = {
    getWeather,
    getWeatherWithCity,
    getWeatherWeek,
    getWeatherWeekCity
}