const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const jwtDecode = require('jwt-decode');
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
// check each request for authorization token
app.use((req, res, next) => {
  if (req.headers.authorization) {
    // decode the keycloak jwt token
    const token = jwtDecode(req.headers.authorization);
    const tokenExpiryDate = new Date(token.exp);
    const currentDate = new Date();

    // check if the token expiry time is in the future
    if (currentDate.getTime() < tokenExpiryDate.getTime()) {
      logger.info(`Request by ${token.name}, ${token.email} - Token valid`);
      logger.info(`Token valid until - ${tokenExpiryDate.toTimeString()}`);
      res.locals.user = token;
      // process request
      next();
    } else {
      logger.error(`Request by ${token.name}, ${token.email} - Unauthorized - Token expired`);
      logger.error(`Token expired at - ${tokenExpiryDate.toTimeString()}`);
      res.status(401).json({ 'error': 'Unauthorized' });
    }
  } else {
    // no authorization token was passed, don't process the request further
    res.status(401).json({ 'error': 'Unauthorized' });
  }
});

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
