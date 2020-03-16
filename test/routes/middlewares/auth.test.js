const sinon = require('sinon');
const jwtSimple = require('jwt-simple');

const config = require('../../../app/config/core');
const authMiddleware = require('../../../app/routes/middlewares/auth');

// create a token with an expiry date 1 hour in the future
let expiryTime = new Date();
expiryTime.setHours(expiryTime.getHours() + 1);
expiryTime = Math.round(expiryTime / 1000);

config.keycloakClientPublicKey = 'keycloakClientPublicKey';
config.iss = 'iss';
config.keycloakClientId = 'keycloakClientId';

const payload = {
  name: 'John',
  email: 'john@mail.com',
  exp: expiryTime,
  dbrole: 'readonly',
  iss: config.iss,
  aud: ['operational-data-api', 'api-cop', config.keycloakClientId],
};

const token = jwtSimple.encode(payload, config.keycloakClientPublicKey);

describe('authMiddleware', () => {
  describe('when it is called', () => {
    describe('and there is an authorization header', () => {
      describe('and the JWT is valid', () => {
        it('should call next and store the decoded token', () => {
          const json = sinon.spy();
          const requestObject = { headers: { authorization: `Bearer ${token}` } };
          const status = sinon.stub().returns({ json });
          const response = { status, locals: { user: null } };
          const next = sinon.spy();

          authMiddleware(requestObject, response, next);

          sinon.assert.notCalled(status);
          sinon.assert.notCalled(json);
          sinon.assert.calledWith(next);
          sinon.assert.match(response.locals.user, payload);
        });
      });

      describe('and the JWT is NOT valid', () => {
        it('should send 401 with correct json', () => {
          const json = sinon.spy();
          const requestObject = { headers: { authorization: 'Bearer madeuptoken' } };
          const status = sinon.stub().returns({ json });
          const response = { status };
          const next = sinon.spy();

          authMiddleware(requestObject, response, next);

          sinon.assert.calledWith(response.status, 401);
          sinon.assert.calledWith(json, { error: 'Unauthorized' });
        });
      });
    });

    describe('and there is NOT an authorization header', () => {
      describe('and the route is _health', () => {
        it('should call next and store the decoded token', () => {
          const json = sinon.spy();
          const requestObject = { headers: {}, path: '/_health' };
          const status = sinon.stub().returns({ json });
          const response = { status, locals: { user: null } };
          const next = sinon.spy();

          authMiddleware(requestObject, response, next);

          sinon.assert.calledWith(next);
        });
      });
    });
    describe('and the route is NOT _health', () => {
      it('should send 401 with correct json', () => {
        const json = sinon.spy();
        const requestObject = { headers: {}, path: '/some-other-path' };
        const status = sinon.stub().returns({ json });
        const response = { status };
        const next = sinon.spy();

        authMiddleware(requestObject, response, next);

        sinon.assert.notCalled(next);
        sinon.assert.calledWith(response.status, 401);
        sinon.assert.calledWith(json, { error: 'Unauthorized' });
      });
    });
  });
});
