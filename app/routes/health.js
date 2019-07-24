const logger = require('../config/logger');

const health = (req, res) => {
  logger.verbose('API is Alive & Kicking!');
  return res.status(200).json({ 'status': 'UP' });
};

module.exports = health;
