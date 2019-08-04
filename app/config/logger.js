const path = require('path');
const { createLogger, format, transports } = require('winston');

// local imports
const config = require('./core');

const {
  colorize, combine, label, prettyPrint, timestamp,
} = format;

module.exports = function (modulePath) {
  // modulePath -> /home/<user>/<dir>/<dir>/filename.js
  // pathParts -> ['', 'home', '<user>', '<dir>', 'filename.js']
  const pathParts = modulePath.split(path.sep);
  // pathParts -> '<dir>/filename.js'
  modulePath = path.join(pathParts[pathParts.length - 2], pathParts.pop());

  return createLogger({
    'level': config.logLevel,
    'silent': process.env.NODE_ENV === 'testing',
    'format': combine(
      label({ 'label': modulePath }),
      timestamp({ 'format': 'DD-MM-YYYY HH:mm:ss' }),
      prettyPrint(),
    ),
    'transports': [
      new transports.Console({
        'format': combine(colorize({ 'all': true })),
      }),
    ],
  });
};
