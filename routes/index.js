const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const { check } = require('express-validator/check');

// local imports
const entities = require('./entities');
const items = require('./items');
const logger = require('../config/logger');

const app = express();
const corsConfiguration = {
  'origin': '*',
  'methods': ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  'allowedHeaders': ['Content-Type', 'Authorization'],
};
app.use(cors(corsConfiguration));
// 'extended': 'true' allows the values of the objects passed, to be of any type
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());

app.options('*', cors(corsConfiguration));

app.get('/v1/entities', entities.getEntities);
app.get('/v1/entities/:name', entities.getEntity);
app.patch(
  '/v1/entities/:name',
  [
    check('entity').not().isEmpty().trim(),
    check('field').not().isEmpty().trim(),
    check('newValue').not().isEmpty().trim(),
    check('validFrom').exists().trim(),
    check('validTo').exists().trim(),
  ],
  entities.patchEntitySchema,
);
app.post('/v1/entities/:name', entities.postEntityItem);
app.get('/v1/entities/:name/items/:id', items.getItem);
app.patch(
  '/v1/entities/:name/items/:id',
  [
    check('id').not().isEmpty().trim(),
    check('field').not().isEmpty().trim(),
    check('newValue').not().isEmpty().trim(),
    check('validFrom').optional({ 'nullable': true }).trim(),
    check('validTo').optional({ 'nullable': true }).trim(),
  ],
  items.patchItemField,
);

module.exports = app;
