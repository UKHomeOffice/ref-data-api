const router = require('express').Router();

// local imports
const logger = require('../config/logger');
const { getEntitiesData, getEntityData } = require('../services/entities');
const { token } = require('../config/core');

const getEntities = async (req, res) => {
  const data = await getEntitiesData(token);
  res.json(data);
};

const getEntity = async (req, res) => {
  const { name } = req.params;
  const data = await getEntityData(token, name);
  res.json(data);
};

const patchEntitySchema = (req, res) => {
  const { name } = req.params;

  res.json({
    'message': `Entity '${name}' schema updated`
  });
}

const postEntityItem = (req, res) => {
  const { name } = req.params;

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
