const jwt = require('jsonwebtoken');
const moment = require('moment');

const config = require('../config/core');
const logger = require('../config/logger')(__filename);

const BEARER = 'Bearer ';
const ONE_SECOND = 1000;

const authMiddleware = (req, res, next) => {
  const certificate = config.keycloakClientPublicKey;

  if (req.headers.authorization) {
    const currentTimestamp = Math.floor(Date.now() / ONE_SECOND);
    let encodedToken = req.headers.authorization;

    if (encodedToken.startsWith(BEARER)) {
      encodedToken = encodedToken.slice(
        BEARER.length,
        req.headers.authorization.length,
      );
    }

    try {
      const token = jwt.verify(encodedToken, certificate, {
        audience: config.keycloakClientId, // check the token audience matches keycloak
        issuer: config.iss, // check the issuer matches config
        ignoreExpiration: false, // check the expiry
        clockTimestamp: currentTimestamp, // set the time to base measurements from
      });

      const tokenExpiry = moment(token.exp * ONE_SECOND);

      logger.info(
        `${req.method} - ${req.url} - Request by ${token.name}, ${
          token.email
        } - Token valid until - ${tokenExpiry.format()}`,
      );
      res.locals.user = token;
      next();
    } catch (error) {
      const { name, message } = error;
      logger.error(
        `${req.method} - ${req.url} - Token not valid for our SSO endpoint - ${name} - ${message}`,
      );
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
};

module.exports = authMiddleware;
