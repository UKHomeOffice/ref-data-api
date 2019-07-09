const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const jwtDecode = require('jwt-decode');
const moment = require('moment');
const { check } = require('express-validator/check');

// local imports
const entities = require('./entities');
const health = require('./health');
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
    const tokenExpiryDate = moment(token.exp * 1000);
    const currentDate = moment(new Date());

    // check if the token expiry time is in the future
    if (currentDate.unix() < tokenExpiryDate.unix()) {
      logger.info(`${req.method} - ${req.url} - Request by ${token.name}, ${token.email} - Token valid until - ${tokenExpiryDate.format()}`);
      res.locals.user = token;
      // process request
      next();
    } else {
      logger.error(`${req.method} - ${req.url} - Request by ${token.name}, ${token.email} - Unauthorized - Token expired at ${tokenExpiryDate.format()}`);
      res.status(401).json({ 'error': 'Unauthorized' });
    }
  } else if (req.path !== '/_health') {
    // not an health check and no authorization token was passed,
    // don't process the request further
    res.status(401).json({ 'error': 'Unauthorized' });
  } else {
    // process request
    next();
  }
});

app.options('*', cors(corsConfiguration));

app.get('/_health', health);
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
