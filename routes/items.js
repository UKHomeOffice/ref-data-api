const router = require('express').Router();

// local imports
const logger = require('../config/logger');
const { extractToken } = require('../helpers');
const { getItemData } = require('../services/items');

const getItem = async (req, res) => {
  const { name, id } = req.params;
  const token = extractToken(req.headers.authorization);
  const data = await getItemData(token, name, id);
  res.json(data);
};

const patchItemField = (req, res) => {
  const { name, id, field } = req.params;
  const token = extractToken(req.headers.authorization);
  logger.info(`Updated ${name} field ${field}`);
  res.json({
    'message': `Field '${field}' updated`,
  });
};

module.exports = { getItem, patchItemField };
