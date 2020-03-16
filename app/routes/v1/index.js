const express = require('express');
const { check } = require('express-validator/check');

// local imports
const entities = require('../entities');
const items = require('../items');

const app = express();

app.get('/entities', entities.getEntities);
app.get('/entities/:name', entities.getEntity);
app.patch(
  '/entities/:name',
  [
    check('entity').not().isEmpty().trim(),
    check('field').not().isEmpty().trim(),
    check('newValue').not().isEmpty().trim(),
    check('validFrom').exists().trim(),
    check('validTo').exists().trim(),
  ],
  entities.patchEntitySchema,
);
app.post('/entities/:name', entities.postEntityItem);
app.get('/entities/:name/items/:id', items.getItem);
app.patch(
  '/entities/:name/items/:id',
  [
    check('field').not().isEmpty().trim(),
    check('newValue').not().isEmpty().trim(),
    check('validFrom').optional({ nullable: true }).trim(),
    check('validTo').optional({ nullable: true }).trim(),
  ],
  items.patchItemField,
);

module.exports = app;
