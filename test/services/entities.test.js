const expect = require('chai').expect;
const Chance = require('chance');
const nock = require('nock');

// local imports
const logger = require('../../config/logger');
const {
  entitiesFormattedData,
  entitiesResponse,
  entityFormattedData,
  entityResponse,
} = require ('./testData/entitiesStubData');
const { getEntitiesData, getEntityData } = require('../../services/entities');
const { postgrestUrls } = require('../../config/core');

describe('Test Entity Services', () => {
  const token = new Chance().hash();

  before(function () {
    // disable logging
    logger.silent = true;
  });

  describe('Entities', () => {
    before(function () {
      // disable logging
      logger.silent = true;
    });

    it('Returns all entities', (done) => {
      nock(postgrestUrls.entities, {
        reqheaders: {
          'Authorization': `Bearer ${token}`
        }
      })
      .get('/')
      .reply(200, entitiesResponse);

      getEntitiesData(token).then(response => {
        expect(typeof response).to.equal('object');
        expect(response.data).to.have.lengthOf(2);
        expect(response).to.deep.equal(entitiesFormattedData);
        done();
      });
    });

    it('Should return 401 Unauthorized for expired tokens', (done) => {
      const token = new Chance().hash();
      nock(postgrestUrls.entities, {
        reqheaders: {
          'Authorization': `Bearer ${token}`
        }
      })
      .get('/')
      .reply(401, {'message': 'JWT expired'})

      getEntitiesData(token).then(response => {
        expect(response).to.deep.equal({'code': 401, 'status': null, 'data': 'JWT expired'});
        done();
      })
    });

    after(function () {
      // enable logging
      logger.silent = false;
    });
  });

  describe('Entity', () => {
    before(function () {
      // disable logging
      logger.silent = true;
    });

    it('Returns an entity by name', async () => {
      const name = 'activities';
      nock(postgrestUrls.entities, {
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

    it('Should return 401 Unauthorized for expired tokens', async () => {
      const name = 'activities';
      const token = new Chance().hash();
      nock(postgrestUrls.entities, {
        reqheaders: {
          'Authorization': `Bearer ${token}`
        }
      })
      .persist()
      .intercept('/', 'GET').reply(401, {'message': 'JWT expired'})
      .intercept('/activities', 'GET').reply(401, {'message': 'JWT expired'})

      let data = await getEntityData(token, name);
      expect(data).to.deep.equal({'code': 401, 'status': null, 'data': 'JWT expired'});
    });

    after(function () {
      // enable logging
      logger.silent = false;
    });
  });

  after(function () {
    // enable logging
    logger.silent = false;
  });
});
