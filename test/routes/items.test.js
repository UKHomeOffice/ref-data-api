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

  it('Should return an item', async () => {
    // mock http request
    nock(postgrestUrls.entities, {
      'reqheaders': {
        'Authorization': `Bearer ${token}`,
      },
    })
      .intercept('/', 'GET').reply(200, entitiesResponse)
      .intercept('/country?id=eq.3', 'GET')
      .reply(200, itemResponse);

    // mock request and response objects
    const req = httpMocks.createRequest({
      'method': 'GET',
      'url': '/v1/entities/country/items/3',
      'headers': { 'authorization': `Bearer ${token}` },
      'params': { 'name': 'country', 'id': 3 },
    });
    const res = httpMocks.createResponse();
    await getItem(req, res);

    expect(res._isJSON()).to.be.true;
    expect(res._getData()).to.equal(JSON.stringify(itemFormattedData));
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

  it('Should return "401 Unauthorized" when retrieving an item with an expired token', async () => {
    // mock http request
    nock(postgrestUrls.entities, {
      'reqheaders': {
        'Authorization': `Bearer ${token}`,
      },
    })
      .intercept('/', 'GET').reply(401, { 'message': 'JWT expired' })
      .intercept('/country?id=eq.3', 'GET')
      .reply(401, { 'message': 'JWT expired' });

    // mock request and response objects
    const req = httpMocks.createRequest({
      'method': 'GET',
      'url': '/v1/entities/country/items/3',
      'headers': { 'authorization': `Bearer ${token}` },
      'params': { 'name': 'country', 'id': 3 },
    });
    const res = httpMocks.createResponse();
    const expectedData = { 'code': 401, 'status': null, 'data': 'JWT expired' };
    await getItem(req, res);

    expect(res._isJSON()).to.be.true;
    expect(res._getData()).to.equal(JSON.stringify(expectedData));
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
