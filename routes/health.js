const logger = require('../config/logger');

const health = (req, res) => {
  logger.info('API is Alive & Kicking!);
  return res.status(200).json({ 'status': 'UP' });
};

module.exports = health;
