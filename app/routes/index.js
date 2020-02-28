const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const jwtDecode = require('jwt-decode');
const moment = require('moment');
const jwt = require('jsonwebtoken');

// local imports
const config = require('../config/core');
const health = require('./health');
const logger = require('../config/logger')(__filename);
const v1 = require('./v1');
const v2 = require('./v2');

const BEARER = 'Bearer ';
const corsConfiguration = {
  origin: '*',
  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const app = express();

app.use(cors(corsConfiguration));
// 'extended': 'true' allows the values of the objects passed, to be of any type
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.options('*', cors(corsConfiguration));

// check each request for authorization token
app.use((req, res, next) => {
  if (req.headers.authorization) {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    let encodedToken = req.headers.authorization;

    if (encodedToken.startsWith(BEARER)) {
      encodedToken = encodedToken.slice(
        BEARER.length,
        req.headers.authorization.length,
      );
    }

    try {
      const token = jwt.verify(encodedToken, config.keycloakClientSecret, {
        audience: config.keycloakClientId, // check the token audience matches keycloak
        issuer: config.iss, // check the issuer matches config
        ignoreExpiration: false, // check the expiry
        clockTimestamp: currentTimestamp, // set the time to base measurements from
      });
      const tokenExpiry = moment(token.exp * 1000);

      logger.info(`${req.method} - ${req.url} - Request by ${token.name}, ${
        token.email
      } - Token valid until - ${tokenExpiry.format()}`);
      res.locals.user = token;
      next();
    } catch (error) {
      const { name, message } = error;

      logger.error(`${req.method} - ${req.url} - Token not valid for our SSO endpoint - ${name} - ${message}`);
      res.status(401).json({ error: 'Unauthorized' });
    }
  } else {
    // There is no authorization
    // check if it is a healthcheck endpoint they are accessing,
    // otherwise they are denied.

    switch (req.path) {
      case '/_health':
        next();
        break;
      default:
        res.status(401).json({ error: 'Unauthorized' });
        break;
    }
  }
});

app.use('/v1', v1);
app.use('/v2', v2);
app.get('/_health', health);

module.exports = app;
