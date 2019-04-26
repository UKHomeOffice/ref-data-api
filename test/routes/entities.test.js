const {
  after, afterEach, before, describe, it,
} = require('mocha');
const { expect } = require('chai');
const Chance = require('chance');
const nock = require('nock');
const httpMocks = require('node-mocks-http');

// local imports
const logger = require('../../config/logger');
const {
  entitiesFormattedData,
  entitiesResponse,
  entityFormattedData,
  entityResponse,
} = require('../services/testData/entitiesStubData');
const {
  getEntities,
  getEntity,
  patchEntitySchema,
  postEntityItem,
} = require('../../routes/entities');
const { postgrestUrls } = require('../../config/core');

describe('Test Entity Routes', () => {
  const token = new Chance().hash();

  before(() => {
    // disable logging
    logger.silent = true;
  });

  describe('Entities', () => {
    it('Should return all entities', async () => {
      // mock http request
      nock(postgrestUrls.entities, {
        'reqheaders': {
          'Authorization': `Bearer ${token}`,
        },
      })
        .get('/')
        .reply(200, entitiesResponse);

      // mock request and response objects
      const req = httpMocks.createRequest({
        'method': 'GET',
        'url': '/v1/entities',
        'headers': { 'authorization': `Bearer ${token}` },
      });
      const res = httpMocks.createResponse();
      await getEntities(req, res);

      expect(res._isJSON()).to.be.true;
      expect(res._getData()).to.equal(JSON.stringify(entitiesFormattedData));
    });

    it('Should return "401 Unauthorized" when retrieving all entities with an expired token', async () => {
      // mock http request
      nock(postgrestUrls.entities, {
        'reqheaders': {
          'Authorization': `Bearer ${token}`,
        },
      })
        .get('/')
        .reply(401, { 'message': 'JWT expired' });

      // mock request and response objects
      const req = httpMocks.createRequest({
        'method': 'GET',
        'url': '/v1/entities',
        'headers': { 'authorization': `Bearer ${token}` },
      });
      const res = httpMocks.createResponse();
      const expectedData = { 'code': 401, 'status': null, 'data': 'JWT expired' };
      await getEntities(req, res);

      expect(res._isJSON()).to.be.true;
      expect(res._getData()).to.equal(JSON.stringify(expectedData));
    });
  });

  describe('Entity Schema', () => {
    it('Should return an entity', async () => {
      // mock http request
      nock(postgrestUrls.entities, {
        'reqheaders': {
          'Authorization': `Bearer ${token}`,
        },
      })
        .intercept('/', 'GET').reply(200, entitiesResponse)
        .intercept('/activities', 'GET')
        .reply(200, entityResponse);

      // mock request and response objects
      const req = httpMocks.createRequest({
        'method': 'GET',
        'url': '/v1/entities/activities',
        'headers': { 'authorization': `Bearer ${token}` },
        'params': { 'name': 'activities' },
      });
      const res = httpMocks.createResponse();
      await getEntity(req, res);

      expect(res._isJSON()).to.be.true;
      expect(res._getData()).to.equal(JSON.stringify(entityFormattedData));
    });

    it('Should return an updated entity schema', () => {
      const req = httpMocks.createRequest({
        'method': 'PATCH',
        'url': '/v1/entities/activities',
        'headers': { 'authorization': `Bearer ${token}` },
        'params': { 'name': 'activities' },
      });
      const res = httpMocks.createResponse();
      const expectedMessage = "Entity 'activities' schema updated";
      patchEntitySchema(req, res);

      expect(res._isJSON()).to.be.true;
      expect(res._getData()).to.equal(JSON.stringify({ 'message': expectedMessage }));
    });

    it('Should return a newly created entity item', () => {
      const req = httpMocks.createRequest({
        'method': 'POST',
        'url': '/v1/entities/activities',
        'headers': { 'authorization': `Bearer ${token}` },
        'params': { 'name': 'activities' },
      });
      const res = httpMocks.createResponse();
      const expectedMessage = "Successfully created a new item in the entity 'activities'";
      postEntityItem(req, res);

      expect(res._isJSON()).to.be.true;
      expect(res._getData()).to.equal(JSON.stringify({ 'message': expectedMessage }));
    });

    it('Should return "401 Unauthorized" when retrieving an entity with an expired token', async () => {
      // mock http request
      nock(postgrestUrls.entities, {
        'reqheaders': {
          'Authorization': `Bearer ${token}`,
        },
      })
        .intercept('/', 'GET').reply(401, { 'message': 'JWT expired' })
        .intercept('/activities', 'GET')
        .reply(401, { 'message': 'JWT expired' });

      // mock request and response objects
      const req = httpMocks.createRequest({
        'method': 'GET',
        'url': '/v1/entities/activities',
        'headers': { 'authorization': `Bearer ${token}` },
        'params': { 'name': 'activities' },
      });
      const res = httpMocks.createResponse();
      const expectedData = { 'code': 401, 'status': null, 'data': 'JWT expired' };
      await getEntity(req, res);

      expect(res._isJSON()).to.be.true;
      expect(res._getData()).to.equal(JSON.stringify(expectedData));
    });
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
