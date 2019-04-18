const expect = require('chai').expect;
const Chance = require('chance');
const nock = require('nock');
const util = require('util');

// local imports
const { entitiesResponse, itemResponse, itemFormattedData } = require ('./data/itemsStubData');
const { getItemData } = require('../../services/items');
const { postgrestUrls } = require('../../config/core');

describe('Test Items Services', () => {
  const token = new Chance().hash();
  const entitiesUrl = util.format(postgrestUrls.entities);

  it('Returns an entity item by id', async () => {
    const name = 'country';
    const id = 3;
    // const entityUrl = util.format(postgrestUrls.item, name, id);
    nock(entitiesUrl, {
      reqheaders: {
        'Authorization': `Bearer ${token}`
      }
    })
    .persist()
    .intercept('/', 'GET').reply(200, entitiesResponse)
    .intercept('/country?id=eq.3', 'GET').reply(200, itemResponse)
    // .intercept(entityUrl, 'GET').reply(200, entityResponse)

    let data = await getItemData(token, name, id);
    expect(data).to.deep.equal(itemFormattedData);
  });
});
