const expect = require('chai').expect;
const Chance = require('chance');
const nock = require('nock');
const util = require('util');

// local imports
const {
  entitiesResponse,
  entitiesFormattedData,
  entityResponse,
  entityFormattedData } = require ('./data/entitiesResponse');
const { getEntitiesData, getEntityData } = require('../../services/entities');
const { postgrestUrls } = require('../../config/core');

describe('Test Entities Services', () => {
  const token = new Chance().hash();
  const entitiesUrl = util.format(postgrestUrls.entities);

  it('Returns all entities', (done) => {
    const entitiesUrl = util.format(postgrestUrls.entities);
    nock(entitiesUrl, {
      reqheaders: {
        'Authorization': `Bearer ${token}`
      }
    })
    .get('/')
    .reply(200, entitiesResponse);

    getEntitiesData(token).then(entitiesResponse => {
      expect(typeof entitiesResponse).to.equal('object');
      expect(entitiesResponse.data).to.have.lengthOf(2);
      expect(entitiesResponse).to.deep.equal(entitiesFormattedData);
      done();
    });
  });

  it('Returns an entity by name', async () => {
    const name = 'activities';
    const entityUrl = util.format(postgrestUrls.entity, name);
    nock(entitiesUrl, {
      reqheaders: {
        'Authorization': `Bearer ${token}`
      }
    })
    .persist()
    .intercept('/', 'GET').reply(200, entitiesResponse)
    .intercept('/activities', 'GET').reply(200, entityResponse)

    let data = await getEntityData(token, name);
    expect(data).to.deep.equal(entityFormattedData);
  });
});
