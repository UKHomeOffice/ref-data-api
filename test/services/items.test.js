const expect = require('chai').expect;
const Chance = require('chance');
const nock = require('nock');

// local imports
const { entitiesResponse, itemResponse, itemFormattedData } = require ('./testData/itemsStubData');
const { getItemData } = require('../../services/items');
const { postgrestUrls } = require('../../config/core');

describe('Test Items Services', () => {
  const token = new Chance().hash();

  it('Returns an entity item by id', async () => {
    const name = 'country';
    const id = 3;
    nock(postgrestUrls.entities, {
      reqheaders: {
        'Authorization': `Bearer ${token}`
      }
    })
    .persist()
    .intercept('/', 'GET').reply(200, entitiesResponse)
    .intercept('/country?id=eq.3', 'GET').reply(200, itemResponse)

    let data = await getItemData(token, name, id);
    expect(data).to.deep.equal(itemFormattedData);
  });

  it('Should return 401 Unauthorized for expired tokens', async () => {
    const name = 'country';
    const id = 3;
    const token = new Chance().hash();
    nock(postgrestUrls.entities, {
      reqheaders: {
        'Authorization': `Bearer ${token}`
      }
    })
    .persist()
    .intercept('/', 'GET').reply(401, {'message': 'JWT expired'})
    .intercept('/country?id=eq.3', 'GET').reply(401, {'message': 'JWT expired'})

    let data = await getItemData(token, name, id);
    expect(data).to.deep.equal({'code': 401, 'status': null, 'data': 'JWT expired'});
  });
});