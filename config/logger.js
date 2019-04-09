'use strict'

const { createLogger, format, transports } = require('winston');

// local imports
const config = require('./core');

const { combine, timestamp, label, prettyPrint } = format
const logger = createLogger({
  level: config.logLevel,
  format: combine(
    label({ label: config.name }),
    timestamp(),
    prettyPrint()
  ),
  transports: [new transports.Console()]
})

module.exports = logger;
