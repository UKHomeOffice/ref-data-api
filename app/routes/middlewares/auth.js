const jwt = require('jsonwebtoken');
const moment = require('moment');
const Hawk = require('hawk');

const config = require('../../config/core');
const logger = require('../../config/logger')(__filename);

const BEARER = 'Bearer ';
const HAWK = 'Hawk ';
const ONE_SECOND = 1000;

const jwtAuthMiddleware = (req, res, next) => {
  const certificate = config.keycloakClientPublicKey;
  const currentTimestamp = Math.floor(Date.now() / ONE_SECOND);
  let encodedToken = req.headers.authorization.slice(
    BEARER.length,
    req.headers.authorization.length,
  );

  try {
    const user = jwt.verify(encodedToken, certificate, {
      audience: config.keycloakClientId, // check the token audience matches keycloak
      issuer: config.iss, // check the issuer matches config
      ignoreExpiration: false, // check the expiry
      clockTimestamp: currentTimestamp, // set the time to base measurements from
    });

    const tokenExpiry = moment(user.exp * ONE_SECOND);

    logger.debug(
      `${req.method} - ${req.url} - Request by ${user.name}, ${
        user.email
      } - Token valid until - ${tokenExpiry.format()}`,
    );
    res.locals.user = user;
    next();
  } catch (error) {
    const { name, message } = error;

    logger.error('Token not valid for our SSO endpoint', {
      timestamp: moment().utc().format('D/MMM/YYYY:HH:mm:ss ZZ'),
      method: req.method,
      url: req.url,
      errorName: name,
      errorMessage: message,
    });
    res.status(401).json({ error: 'Unauthorized: Incorrect JWT token' });
  }
};

const hawkAuthMiddleware = async (req, res, next) => {
  try {
    const credentialsFunc = id => config.hawkCredentials.find(credential => credential.id === id);
    const request = {
      method: req.method,
      url: req.originalUrl,
      headers: req.headers,
      port: req.port,
      host: req.hostname,
    };
    logger.info(request);
    logger.info(req);
    logger.info({
      method: req.method,
      host: req.host,
      port: req.port,
      resource: req.url,
    });
    logger.info(Hawk.utils.parseRequest(req, {}));
    const { credentials, artifacts } = await Hawk.server.authenticate(
      req,
      credentialsFunc,
    );

    res.locals.user = {
      name: credentials.user,
      refdbrole: credentials.role,
    };

    next();
  } catch (e) {
    logger.error('Error occurred during HAWK authorization', {
      stack: e.stack,
      error: e.message,
      timestamp: moment().utc().format('D/MMM/YYYY:HH:mm:ss ZZ'),
    });
    res.status(401).json({ error: 'Unauthorized: Incorrect HAWK credentials' });
  }
};

const authMiddleware = async (req, res, next) => {
  if (req.path === '/_health') {
    next();
  } else if (req.headers.authorization && req.headers.authorization.startsWith(BEARER)) {
    jwtAuthMiddleware(req, res, next);
  } else if (req.headers.authorization && req.headers.authorization.startsWith(HAWK)) {
    await hawkAuthMiddleware(req, res, next);
  } else {
    res.status(401).json({ error: 'Unauthorized: No auth method specified' });
  }
};

module.exports = authMiddleware;
