const expect = require('chai').expect;
const Chance = require('chance');
const nock = require('nock');
const httpMocks = require('node-mocks-http');

// local imports
const {
  entitiesFormattedData,
  entitiesResponse,
  entityFormattedData,
  entityResponse
} = require ('../services/testData/entitiesStubData');
const { getEntities, getEntity } = require('../../routes/entities');
const { postgrestUrls } = require('../../config/core');

describe('Test Entities Routes', () => {
  const token = new Chance().hash();

  describe('Entities Routes', () => {
    before(function () {
      nock(postgrestUrls.entities, {
        reqheaders: {
          'Authorization': `Bearer ${token}`
        }
      })
      .get('/')
      .reply(200, entitiesResponse);
    });

    it('Should return a json object with all entities', async () => {
      const req = httpMocks.createRequest({
        method: 'GET',
        url: '/v1/entities',
        headers: {'authorization': `Bearer ${token}`}
      });
      const res = httpMocks.createResponse();
      await getEntities(req, res);

      expect(res._isJSON()).to.be.true;
      expect(res._getData()).to.equal(JSON.stringify(entitiesFormattedData));
    });
  })

  describe('Entity Routes', () => {
    before(function () {
      nock(postgrestUrls.entities, {
        reqheaders: {
          'Authorization': `Bearer ${token}`
        }
      })
      .persist()
      .intercept('/', 'GET').reply(200, entitiesResponse)
      .intercept('/activities', 'GET').reply(200, entityResponse)
    });

    it('Should return a json object with an entity schema', async () => {
      const req = httpMocks.createRequest({
        method: 'GET',
        url: '/v1/entities/activities',
        headers: {'authorization': `Bearer ${token}`},
        params: {'name': 'activities'}
      });
      const res = httpMocks.createResponse();
      await getEntity(req, res);

      expect(res._isJSON()).to.be.true;
      expect(res._getData()).to.equal(JSON.stringify(entityFormattedData));
    });
  });
});

