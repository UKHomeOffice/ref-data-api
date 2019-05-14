const {
  after, afterEach, before, describe, it,
} = require('mocha');
const { expect } = require('chai');
const Chance = require('chance');
const nock = require('nock');
const httpMocks = require('node-mocks-http');

// local imports
const logger = require('../../config/logger');
const { entitiesResponse, itemResponse, itemFormattedData } = require('../services/testData/itemsStubData');
const { getItem, patchItemField } = require('../../routes/items');
const { postgrestUrls } = require('../../config/core');

describe('Test Item Routes', () => {
  const token = new Chance().hash();

  before(() => {
    // disable logging
    logger.silent = true;
  });

  it('Should return an updated item field', () => {
    const req = httpMocks.createRequest({
      'method': 'PATCH',
      'url': '/v1/entities/country/items/3',
      'headers': { 'authorization': `Bearer ${token}` },
      'params': { 'name': 'activities', 'id': 3, 'field': 'iso31661alpha2' },
    });
    const res = httpMocks.createResponse();
    const expectedMessage = "Field 'iso31661alpha2' updated";
    patchItemField(req, res);

    expect(res._isJSON()).to.be.true;
    expect(res._getData()).to.equal(JSON.stringify({ 'message': expectedMessage }));
  });

  after(() => {
    // enable logging
    logger.silent = false;
  });

  afterEach(() => {
    // ensure that unused nock interceptors are not left behind
    if (!nock.isDone()) {
      nock.cleanAll();
    }
  });
});
