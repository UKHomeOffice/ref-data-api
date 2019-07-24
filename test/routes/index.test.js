const jwtSimple = require('jwt-simple');
const request = require('supertest');
const { expect } = require('chai');

// local imports
const app = require('../../app/routes');
const logger = require('../../app/config/logger');

describe('Test Index Router', () => {
  before(() => {
    // disable logging
    logger.silent = true;
  });

  describe('Request Attempt /v1/entities/:name/items/:id', () => {
    // create a token with an expiry date 2 hours in the past
    let expiryTime = new Date();
    expiryTime.setHours(expiryTime.getHours() - 2);
    expiryTime = Math.round(expiryTime / 1000);
    const payload = {
      'name': 'Pedro Curado',
      'email': 'pedro@mail.com',
      'exp': expiryTime,
      'refdbrole': 'refreadonly',
    };
    const secret = 'super-secret-19';
    const token = jwtSimple.encode(payload, secret);

    it('Should return an unauthorized request error when passing an expired token', () => request(app)
      .patch('/v1/entities/country/items/3')
      .set('Authorization', `Bearer ${token}`)
      .then((response) => {
        expect(response.status).to.equal(401);
        expect(response.body).to.be.an('object');
        expect(response.body).to.deep.equal({ 'error': 'Unauthorized' });
      }));

    it('Should return an unauthorized request error when no token is passed in request headers', () => request(app)
      .patch('/v1/entities/country/items/3')
      .then((response) => {
        expect(response.status).to.equal(401);
        expect(response.body).to.be.an('object');
        expect(response.body).to.deep.equal({ 'error': 'Unauthorized' });
      }));
  });

  after(() => {
    // enable logging
    logger.silent = false;
  });
});
