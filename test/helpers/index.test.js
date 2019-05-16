const {
  after, before, describe, it,
} = require('mocha');
const { expect } = require('chai');
const Chance = require('chance');

// local imports
const logger = require('../../config/logger');
const {
  extractToken,
  jsonify
} = require('../../helpers');

describe('Test Helper Functions', () => {
  const token = new Chance().hash();

  before(() => {
    // disable logging
    logger.silent = true;
  });

  it('Should jsonify an object in a string', () => {
    const expectedData = {"message": "Hello World!"};
    const result = jsonify('{"message": "Hello World!"}');

    expect(result).to.be.an('object').to.deep.equal(expectedData);
  });

  it('Should extract the token from the string', () => {
    const authorizationString = `Bearer ${token}`;
    const result = extractToken(authorizationString);

    expect(result).to.equal(token);
  });

  after(() => {
    // enable logging
    logger.silent = false;
  });
});
