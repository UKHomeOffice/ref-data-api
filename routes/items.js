const axios = require('axios');
const router = require('express').Router();

// local imports
const logger = require('../config/logger');
const { getItemData } = require('../services/items');
const { token } = require('../config/core');

const getItem = async (req, res) => {
  const { name, id } = req.params;
  try {
    const data = await getItemData(token, name, id);
    res.json(data);
  } catch (error) {
    logger.error(`Error: ${error.response}`);
    res.json({
      'code': error.response.status,
      'status': error.response.statusText,
      'data': error.response.data.message
    })
  }
};

const patchItemField = (req, res) => {
  const { name, id } = req.params;

  res.json({
    'message': 'Field updated'
  });
}

module.exports = { getItem, patchItemField };
