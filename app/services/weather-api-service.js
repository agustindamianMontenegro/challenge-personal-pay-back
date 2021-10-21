const axios = require('axios');
const config = require('./../config/config')
const logger = require('./../logger/logger-pino')
const getWeather = async (lat, lon) => {
    try {
        logger.info(`Try get weather with cord: Lat ${lat} and Lon ${lon}`)
        const response = await axios.get(`${config.urlApiWeather}/weather?lat=${lat}&lon=${lon}&appid=${config.apiKey}`)
        return response.data;
    } catch (e) {
        logger.info(`Error Try get weather with cord: Lat ${lat} and Lon ${lon}`)
        throw new Error(e);
    }
}

const getWeatherWithCity = async (city) => {
    try {
        logger.info(`Try get weather by city ${city}`)
        const response = await axios.get(`${config.urlApiWeather}/weather?q=${city}&appid=${config.apiKey}`)
        return response.data;
    } catch (e) {
        logger.error(`Error try get wather by city ${city}`)
        throw new Error(e);
    }
}

const getWeatherWeekCity = async (city) => {
    try {
        logger.info(`Try get weather week by city ${city}`)
        const response = await axios.get(`${config.urlApiWeather}/forecast?q=${city}&appid=${config.apiKey}`)
        return response.data;
    } catch (e) {
        logger.error(`Error try get wather week by city ${city}`)
        throw new Error(e);
    }
}

const getWeatherWeek = async (lat, lon) => {
    try {
        logger.info(`Try get weather week with cord: Lat ${lat} and Lon ${lon}`)
        const response = await axios.get(`${config.urlApiWeather}/forecast?lat=${lat}&lon=${lon}&appid=${config.apiKey}`)
        return response.data;
    } catch (e) {
        logger.error(`Error Try get weather week with cord: Lat ${lat} and Lon ${lon}`)
        throw new Error(e);
    }
}
module.exports = {
    getWeather,
    getWeatherWithCity,
    getWeatherWeek,
    getWeatherWeekCity
}