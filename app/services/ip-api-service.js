const axios = require('axios');
const config = require('./../config/config')
const url = config.urlApiIp;
const getLocationWithIp = async (ip) => {
    try {
        const response = await axios.get(`${url}/${ip}`);
        return response.data;
    } catch (e) {
        return new Error(e)
    }
}

module.exports = {
    getLocationWithIp
}