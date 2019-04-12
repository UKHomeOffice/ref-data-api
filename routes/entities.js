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

/**
 * return an entity object using the
 * token passed in the request headers
 */
const getEntity = (req, res) => {
  const { name } = req.params;

  getEntityData(token, name, (error, response, data) => {
    if (!error && response.statusCode === 200) {
      res.json(data);
    } else {
      res.json({
        'code': response.statusCode,
        'error': error,
        'body': response.body
      });
    }
  });
};


module.exports = { getEntities, getEntity };
