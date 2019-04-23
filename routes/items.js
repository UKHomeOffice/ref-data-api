const axios = require('axios');
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
  const { name, id } = req.params;
  const token = extractToken(req.headers.authorization);
  res.json({
    'message': 'Field updated'
  });
}

module.exports = { getItem, patchItemField };
