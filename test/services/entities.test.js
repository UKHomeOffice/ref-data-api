const expect = require('chai').expect;
const Chance = require('chance');
const nock = require('nock');
const util = require('util');

// local imports
const entitiesResponse = require ('./data/entitiesResponse');
const { getEntitiesData } = require('../../services/entities');
const { postgrestUrls } = require('../../config/core');

describe('getEntitiesData', () => {

  it('Returns all entities', (done) => {
    const entitiesUrl = util.format(postgrestUrls.entities);
    const chance = new Chance();
    const token = chance.hash();
    nock(entitiesUrl, {
      reqheaders: {
        'Authorization': `Bearer ${token}`
      }
    })
      .get('/')
      .reply(200, entitiesResponse);

    getEntitiesData(token)
      .then(entitiesResponse => {
        expect(typeof entitiesResponse).to.equal('object');
        expect(entitiesResponse.data).to.have.lengthOf(4);
        expect(entitiesResponse.data[0].description).to.equal('Work related activities');
        expect(entitiesResponse.data[0].entityName).to.equal('activities');
        done();
      });
  });
});
