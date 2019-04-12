const router = require('express').Router();

// local imports
const logger = require('../config/logger');
const { getEntitiesData, getEntityData } = require('../services/entities');
const { token } = require('../config/core');

const getEntities = async (req, res) => {
  try {
    const data = await getEntitiesData(token);
    res.json(data);
  } catch (error) {
    logger.error(`Error: ${error}`);
    res.json({
      'code': error.response.status,
      'status': error.response.statusText,
      'data': error.response.data.message
    });
  }
};

const getEntity = async (req, res) => {
  const { name } = req.params;

  try {
    const data = await getEntityData(token, name);
    res.json(data);
  } catch (error) {
    logger.error(`Error: ${error}`);
    res.json({
      'code': error.response.status,
      'status': error.response.statusText,
      'data': error.response.data.message
    });
  }
};


module.exports = { getEntities, getEntity };
