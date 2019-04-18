const axios = require('axios');
const router = require('express').Router();

// local imports
const logger = require('../config/logger');
const { getItemData } = require('../services/items');
const { token } = require('../config/core');

const getItem = async (req, res) => {
  const { name, id } = req.params;
  const data = await getItemData(token, name, id);
  res.json(data);
};

const patchItemField = (req, res) => {
  const { name, id } = req.params;

  res.json({
    'message': 'Field updated'
  });
}

module.exports = { getItem, patchItemField };
