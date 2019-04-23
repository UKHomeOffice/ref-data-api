const router = require('express').Router();

// local imports
const logger = require('../config/logger');
const { getEntitiesData, getEntityData } = require('../services/entities');

const getEntities = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const data = await getEntitiesData(token);
  res.json(data);
};

const getEntity = async (req, res) => {
  const { name } = req.params;
  const token = req.headers.authorization.split(' ')[1];
  const data = await getEntityData(token, name);
  res.json(data);
};

const patchEntitySchema = (req, res) => {
  const { name } = req.params;
  const token = req.headers.authorization.split(' ')[1];
  res.json({
    'message': `Entity '${name}' schema updated`
  });
}

const postEntityItem = (req, res) => {
  const { name } = req.params;
  const token = req.headers.authorization.split(' ')[1];
  res.json({
    'message': `Successfully created a new item in the entity ${name}`
  });
}

module.exports = {
  getEntities,
  getEntity,
  patchEntitySchema,
  postEntityItem
};
