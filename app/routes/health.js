const logger = require('../config/logger')(__filename);

const health = (req, res) => {
  logger.silly('API is Alive & Kicking!');
  return res.status(200).json({ status: 'UP' });
};

module.exports = health;
