const service = require('./../services/ip-api-service');


/* 
retorna datos de ubicacion segun ip
*/
const getLocationWithIp = async (ip) => {
    try {
        return service.getLocationWithIp(ip)
    } catch(e) {
        return new Error(e)
    }
}

module.exports = {
    getLocationWithIp
}