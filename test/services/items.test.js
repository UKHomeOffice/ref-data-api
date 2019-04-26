const { expect } = require('chai');
const Chance = require('chance');
const nock = require('nock');

// local imports
const logger = require('../../config/logger');
const { entitiesResponse, itemResponse, itemFormattedData } = require('./testData/itemsStubData');
const { getItemData } = require('../../services/items');
const { postgrestUrls } = require('../../config/core');

describe('Test Item Services', () => {
  const token = new Chance().hash();

  before(() => {
    // disable logging
    logger.silent = true;
  });

  it('Returns an entity item by id', async () => {
    const name = 'country';
    const id = 3;
    nock(postgrestUrls.entities, {
      'reqheaders': {
        'Authorization': `Bearer ${token}`,
      },
    })
      .intercept('/', 'GET')
      .reply(200, entitiesResponse)
      .intercept('/country?id=eq.3', 'GET')
      .reply(200, itemResponse);

    const data = await getItemData(token, name, id);
    expect(data).to.deep.equal(itemFormattedData);
  });

  it('Should return 401 Unauthorized when retrieving an item with an expired token', async () => {
    const name = 'country';
    const id = 3;
    nock(postgrestUrls.entities, {
      'reqheaders': {
        'Authorization': `Bearer ${token}`,
      },
    })
      .intercept('/', 'GET')
      .reply(401, { 'message': 'JWT expired' })
      .intercept('/country?id=eq.3', 'GET')
      .reply(401, { 'message': 'JWT expired' });

    const data = await getItemData(token, name, id);
    expect(data).to.deep.equal({ 'code': 401, 'status': null, 'data': 'JWT expired' });
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
