const router = require('express').Router();

// local imports
const logger = require('../config/logger');
const pool = require('../db/index');
const { extractToken } = require('../helpers');
const { getEntityDescription, getEntitySchema } = require('../db/entities');
const { getItemData } = require('../db/items');

const getItem = (req, res) => {
  const { name:entityName, id } = req.params;
  const role = 'readonlyreference';

  const promise1 = getEntityDescription(entityName);
  const promise2 = getEntitySchema(role, entityName);
  const promise3 = getItemData(role, entityName, id);

  Promise.all([promise1, promise2, promise3])
    .then((resultsArray) => {
      res.json({
        'status': 'success',
        'code': 200,
        'entityLabel': '',
        'entityName': entityName,
        'entitySchema': {
          'description': resultsArray[0],
          'required': resultsArray[1].required,
          'properties': resultsArray[1].properties,
        },
        'itemId': resultsArray[2].id,
        'data': resultsArray[2],
      });
    })
    .catch(error => res.json({ 'message': error.message }));
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
