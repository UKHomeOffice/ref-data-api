const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const { check } = require('express-validator/check');

// local imports
const config = require('../config/core');
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
    const headers = {
      'headers': {
        'Authorization': req.headers.authorization
      },
    };
    axios(config.keycloakUserInfoUrl, headers)
      .then((response) => {
        // if the status is not 'OK' the token is invalid
        if (response.status !== 200) {
          logger.error('Invalid authorization token - Unauthorized');
          res.status(401).json({ 'error': 'Unauthorized' });
        }
        // pass the user info returned by keycloak by storing in `res.locals`
        res.locals.user = response.data;
        logger.info(`Request by ${res.locals.user.name}, ${res.locals.user.email}`);
        // the authorization token is valid, process request
        next()
      })
      .catch((error) => {
        logger.error(error.message);
        return new Error(error.stack);
      });
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
