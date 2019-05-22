const { createLogger, format, transports } = require('winston');

// local imports
const config = require('./core');

const {
  combine,
  timestamp,
  prettyPrint,
} = format;

const logger = createLogger({
  'level': config.logLevel,
  'format': combine(
    timestamp(),
    prettyPrint(),
  ),
  'transports': [new transports.Console()],
});

module.exports = logger;
