const axios = require('axios');
const router = require('express').Router();

// local imports
const config = require('../config/core');
const logger = require('../config/logger');
const pool = require('../db/index');
const { extractToken } = require('../helpers');
const { getEntityDescription, getEntitySchema } = require('../db/entities');
const { getItemData } = require('../db/items');

const getItem = (req, res) => {
  const { 'name': entityName, id } = req.params;

  const promise1 = getEntityDescription(entityName);
  const promise2 = getEntitySchema(config.readOnlyRole, entityName);
  const promise3 = getItemData(config.readOnlyRole, entityName, id);

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
  const { body } = req;
  const { name, id } = req.params;

  if (Object.entries(body).length === 0 && body.constructor === Object) {
    return res.status(400).json({ 'message': 'Invalid JSON object' });
  }

  const date = new Date();
  const utcTimeStampString = date.toUTCString();

  const updateItemField = {
    'variables': {
      'action': {
        'value': 'PATCH',
        'type': 'String',
      },
      'object': {
        'value': 'Item',
        'type': 'String',
      },
      'entityName': {
        'value': name,
        'type': 'String',
      },
      'requestedDateTime': {
        'value': utcTimeStampString,
        'type': 'String',
      },
      'changeRequested': {
        'value': JSON.stringify(body),
        'type': 'json',
      },
    },
  };

  axios.post(config.camundaUrls.submitRequest, updateItemField)
    .then((response) => {
      logger.info('Item field value update requested');
      logger.info(response.data);
      res.status(200).json(
        {
          'status': 200,
          'requestId': response.data.id,
        },
      );
    })
    .catch((error) => {
      logger.error(error.stack);
      res.status(400).json({});
    });
};

module.exports = { getItem, patchItemField };
