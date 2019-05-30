const httpMocks = require('node-mocks-http');
const jwtSimple = require('jwt-simple');
const nock = require('nock');
const request = require('supertest');
const { expect } = require('chai');

// local imports
const app = require('../../routes');
const config = require('../../config/core');
const logger = require('../../config/logger');
const { patchItemField } = require('../../routes/items');

describe('Test Item Routes', () => {
  before(() => {
    // disable logging
    logger.silent = true;
  });

  describe('PATCH /v1/entities/:name/items/:id', () => {
    // create a token with an expiry date 2 hours in the past
    const expiryTime = new Date();
    expiryTime.setHours(expiryTime.getHours() - 2);
    const payload = {
      'name': 'Pedro Curado',
      'email': 'pedro@mail.com',
      'exp': expiryTime.getTime(),
      'refdbrole': 'readonlyreference',
    };
    const secret = 'super-secret-19';
    const token = jwtSimple.encode(payload, secret);

    it('Should return an unauthorized error when passing an expired token', () => {
      return request(app)
        .patch('/v1/entities/country/items/3')
        .set('Authorization', `Bearer ${token}`)
        .then((response) => {
          expect(response.status).to.equal(401);
          expect(response.body).to.be.an('object');
          expect(response.body).to.deep.equal({ 'error': 'Unauthorized' });
        });
    });

    it('Should return an unauthorized error when no token is passed in request headers', () => {
      return request(app)
        .patch('/v1/entities/country/items/3')
        .then((response) => {
          expect(response.status).to.equal(401);
          expect(response.body).to.be.an('object');
          expect(response.body).to.deep.equal({ 'error': 'Unauthorized' });
        });
    });
  });

  after(() => {
    // enable logging
    logger.silent = false;
  });
});
