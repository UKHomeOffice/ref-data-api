const router = require('express').Router();

// local imports
const logger = require('../config/logger');
const pool = require('../db/index');
const { extractToken } = require('../helpers');
const { getEntitiesData } = require('../services/entities');
const {
  getAllEntities,
  getEntityData,
  getEntityDescription,
  getEntitySchema,
} = require('../db/entities');

const getEntities = async (req, res) => {
  const role = 'readonlyreference';
  const data = {
    'status': 'success',
    'code': 200,
    'data': [],
  };

  const entities = await getAllEntities();
  const promiseArray = entities.map(async (entity) => {
    const dataObject = {};
    dataObject.entityName = entity;

    const description = await getEntityDescription(entity);
    dataObject.description = description;

    const schema = await getEntitySchema(role, entity);
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
  const role = 'readonlyreference';
  // const role = 'webanon';

  const promise1 = getEntityDescription(entityName);
  const promise2 = getEntitySchema(role, entityName);
  const promise3 = getEntityData(role, entityName);

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
  const { name } = req.params;
  const token = extractToken(req.headers.authorization);
  res.json({
    'message': `Successfully created a new item in the entity '${name}'`,
  });
};

module.exports = {
  getEntities,
  getEntity,
  patchEntitySchema,
  postEntityItem,
};
