const expect = require('chai').expect;
const Chance = require('chance');
const nock = require('nock');
const httpMocks = require('node-mocks-http');

// local imports
const { entitiesResponse, itemResponse, itemFormattedData } = require ('../services/testData/itemsStubData');
const { getItem, patchItemField } = require('../../routes/items');
const { postgrestUrls } = require('../../config/core');

describe('Items', () => {
  const token = new Chance().hash();

  before(function () {
    nock(postgrestUrls.entities, {
      reqheaders: {
        'Authorization': `Bearer ${token}`
      }
    })
    .persist()
    .intercept('/', 'GET').reply(200, entitiesResponse)
    .intercept('/country?id=eq.3', 'GET').reply(200, itemResponse)
  });

  it('Should return an item', async () => {
    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/v1/entities/country/items/3',
      headers: {'authorization': `Bearer ${token}`},
      params: {'name': 'country', 'id': 3}
    });
    const res = httpMocks.createResponse();
    await getItem(req, res);

    expect(res._isJSON()).to.be.true;
    expect(res._getData()).to.equal(JSON.stringify(itemFormattedData));
  });

  it('Should return an updated item field', () => {
    const req = httpMocks.createRequest({
      method: 'PATCH',
      url: '/v1/entities/country/items/3',
      headers: {'authorization': `Bearer ${token}`},
      params: {'name': 'activities', 'id': 3, 'field': 'iso31661alpha2'}
    });
    const res = httpMocks.createResponse();
    const expectedMessage = "Field 'iso31661alpha2' updated";
    patchItemField(req, res);

    expect(res._isJSON()).to.be.true;
    expect(res._getData()).to.equal(JSON.stringify({"message": expectedMessage}));
  });
});

