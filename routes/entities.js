const router = require('express').Router();

// local imports
const logger = require('../config/logger');
const { extractToken } = require('../helpers');
const { getEntitiesData, getEntityData } = require('../services/entities');

const getEntities = async (req, res) => {
  const token = extractToken(req.headers.authorization);
  const data = await getEntitiesData(token);
  res.json(data);
};

const getEntity = async (req, res) => {
  const { name } = req.params;
  const token = extractToken(req.headers.authorization);
  const data = await getEntityData(token, name);
  res.json(data);
};

const patchEntitySchema = (req, res) => {
  const { name } = req.params;
  const token = extractToken(req.headers.authorization);
  res.json({
    'message': `Entity '${name}' schema updated`
  });
}

const postEntityItem = (req, res) => {
  const { name } = req.params;
  const token = extractToken(req.headers.authorization);
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
