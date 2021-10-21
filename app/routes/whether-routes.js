/* eslint-disable max-len */
const Router = require('express').Router;
const controller = require('./../controller/ip-api-controller')
const controllerWeather = require('./../controller/weather-controller');
const logger = require('./../logger/logger-pino')
const router = Router();


/* 
este metodo get /location nos permite obtener la ubicacion segun ip
*/
router.get('/location', async (req, res, next) => {
    let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    try {
        logger.info(`get location user by ip ${ip}`);
        city = await controller.getLocationWithIp(ip);
        if(city.status === 'fail') {
            throw new Error(city)
        }
        logger.info('succes get location by ip');
        return res.json(city);

    } catch (e) {
        logger.info(`Error try get location by ip ${ip}`);
        return next(e);
    }
});


/* 
este metodo get nos permite obtener el clima actual segun city o ip
*/
router.get('/current/:city?', async (req, res, next) => {

    let city = req.params.city;
    let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    try {
        let weatherInfo;
        let response;
        if (!city) {
            logger.info(`Init flow current with ip ip:${ip}`);
            locatioIp = await controller.getLocationWithIp(ip);
            weatherInfo = await controllerWeather.getWeather(locatioIp.lat, locatioIp.lon);
            response = { ubicacionApiIP: locatioIp, weatherInfo };
        }
        else {
            logger.info(`Init flow current with city:${city}`);
            weatherInfo = await controllerWeather.getWeatherWithCity(city);
            response = {
                city: weatherInfo.city,
                weatherInfo : weatherInfo.weatherWeek
            };
        }
        logger.info('success flow current');
        res.json(response);

    } catch (e) {
        logger.error(`Error Flow current by city ${city}`);
        return next(e);
    }

});


/* 
este metodo get nos permite obtener el clima de 6 dias incluyendo el acutal segun city o ip
*/
router.get('/forecast/:city?', async (req, res, next) => {
    let city = req.params.city;
    let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    try {
        let weatherInfo;
        let response;
        if (!city) {
            logger.info(`Init flow forecast with ip ip:${ip}`);

            locatioIp = await controller.getLocationWithIp(ip);
            weatherInfo = await controllerWeather.getWeatherWeek(locatioIp.lat, locatioIp.lon);
            response = { ubicacionApiIP: locatioIp, weatherInfo };
        }
        else {
            logger.info(`Init flow forecast with city:${city}`);
            weatherInfo = await controllerWeather.getWeatherWeekCity(city);
            response = {
                city: weatherInfo.city,
                weatherInfo : weatherInfo.weatherWeek
            }

        }
        return res.json(response);
    } catch (e) {
        logger.error('Error flow forecast')
        return next(e);
    }

});


module.exports = router;
