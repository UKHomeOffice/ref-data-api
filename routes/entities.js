const router = require('express').Router();

// local imports
const logger = require('../config/logger');
const pool = require('../db/index');
const setRole = require('../db/generic');
const { extractToken } = require('../helpers');
const { getEntitiesData } = require('../services/entities');
const { getData, getEntityDescription, getEntitySchema } = require('../db/entities');

const getEntities = async (req, res) => {
  const token = extractToken(req.headers.authorization);
  const data = await getEntitiesData(token);
  res.json(data);
};

const getEntity = (req, res) => {
  const { name } = req.params;

  setRole('readonlyreference')
    .then(() => {
      getEntityDescription(name)
        .then((entityDescription) => {
          getEntitySchema(name)
            .then((entitySchema) => {
              getData(name)
                .then((data) => {
                  res.json({
                    'status': 'success',
                    'code': 200,
                    'entityName': name,
                    'entityLabel': '',
                    'entitySchema': {
                      'description': entityDescription.description,
                      'required': entitySchema.required,
                      'properties': entitySchema.properties,
                    },
                    'data': data,
                  });
                })
                .catch((error) => {
                  logger.info(`Unable to query table "${name}"`);
                  logger.error(error);
                  res.json({ 'message': `Unable to query table "${name}"` });
                });
            });
        });
    });
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
