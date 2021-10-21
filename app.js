const express = require('express');
const cors = require('cors');
const expressPinoLogger = require('express-pino-logger');
const logger = require('./app/logger/logger-pino')

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors())
app.set('trust proxy', true);

const loggerMidleware = expressPinoLogger({
    logger: logger,
    autoLogging: false,
  });
  app.use(loggerMidleware);
//manejo de rutas
const routers = require('./app/routes/whether-routes')
app.use('/v1/', routers)

// manejo default de errores
app.use((err, req, res ,next ) => {
    logger.error(err)
    res.status(500).send({
        code:'error',
        messaje:'Internal server error'
    })
})

module.exports = app;
