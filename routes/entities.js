const axios = require('axios');
const router = require('express').Router();

// local imports
const config = require('../config/core');
const logger = require('../config/logger');
const pool = require('../db/index');
const { extractToken } = require('../helpers');
const {
  getAllEntities,
  getEntityData,
  getEntityDescription,
  getEntitySchema,
} = require('../db/entities');

const getEntities = async (req, res) => {
  const data = {
    'status': 'success',
    'code': 200,
    'data': [],
  };

  const entities = await getAllEntities();

  if (entities.message) {
    // if an error occurs getting all entities we don't need to
    // proceed since we would expect entities to be an array
    return res.json({ 'message': entities.message });
  }

  const promiseArray = entities.map(async (entity) => {
    const dataObject = {};
    dataObject.entityName = entity;

    const description = await getEntityDescription(entity);
    dataObject.description = description;

    const schema = await getEntitySchema(config.readOnlyRole, entity);
    dataObject.required = schema.required;
    dataObject.properties = schema.properties;

    data.data.push(dataObject);
  });

  Promise.all(promiseArray)
    .then(() => res.json(data))
    .catch(error => res.json({ 'message': error.message }));
};

const getEntity = (req, res) => {
  const entityName = req.params.name;

  const promise1 = getEntityDescription(entityName);
  const promise2 = getEntitySchema(config.readOnlyRole, entityName);
  const promise3 = getEntityData(config.readOnlyRole, entityName);

  Promise.all([promise1, promise2, promise3])
    .then((resultsArray) => {
      res.json({
        'status': 'success',
        'code': 200,
        'entityLabel': '',
        'entitySchema': {
          'description': resultsArray[0].description,
          'required': resultsArray[1].required,
          'properties': resultsArray[1].properties,
        },
        'data': resultsArray[2],
      });
    })
    .catch(error => res.json({ 'message': error.message }));
};

const patchEntitySchema = (req, res) => {
  const { name } = req.params;
  const token = extractToken(req.headers.authorization);
  logger.info(`Updated ${name} schema`);
  res.json({
    'message': `Entity '${name}' schema updated`,
  });
};

const postEntityItem = (req, res) => {
  const { body } = req;
  const { name } = req.params;


  if (Object.entries(body).length === 0 && body.constructor === Object) {
    return res.status(400).json({ 'message': 'Invalid JSON object' });
  }

  const date = new Date();
  const utcTimestampString = date.toUTCString();

  const newEntityItem = {
    'variables': {
      'action': {
        'value': 'POST',
        'type': 'String',
      },
      'object': {
        'value': 'Item',
        'type': 'String',
      },
      'entityname': {
        'value': name,
        'type': 'String',
      },
      'requestedDateTime': {
        'value': utcTimestampString,
        'type': 'String',
      },
      'newItem': {
        'value': JSON.stringify(body),
        'type': 'json',
      },
    },
  };

  axios.post(config.camundaUrls.postEntityItem, newEntityItem)
    .then((response) => {
      logger.info('New entity item requested');
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

module.exports = {
  getEntities,
  getEntity,
  patchEntitySchema,
  postEntityItem,
};
