const httpMocks = require('node-mocks-http');
const nock = require('nock');
const request = require('supertest');
const { expect } = require('chai');

// local imports
const app = require('../../routes');
const config = require('../../config/core');
const logger = require('../../config/logger');
const { patchItemField } = require('../../routes/items');

describe('Test Item Routes', () => {
  before(() => {
    // disable logging
    logger.silent = true;
  });

  describe('PATCH /v1/entities/:name/items/:id', () => {
    it('Should return an array with errors if the payload is empty', () => {
      // create an empty payload
      const body = {};
      const expectedErrors = {
        'errors': [
          {
            'location': 'body',
            'param': 'field',
            'msg': 'Invalid value'
          },
          {
            'location': 'body',
            'param': 'newValue',
            'msg': 'Invalid value'
          },
        ]
      }

      // hit API /v1/entities/country/items/3
      return request(app)
        .patch('/v1/entities/country/items/3')
        .send(body)
        .set('Accept', 'application/json')
        .then((response) => {
          expect(response.status).to.equal(422);
          expect(response.body).to.deep.equal(expectedErrors);
        });
    });

    it('Should submit a successful request to update item field', () => {
      const date = new Date();
      const utcTimeStampString = date.toUTCString();

      const body = {
        'item': 3,
        'field': 'iso31661alpha2',
        'newValue': 'AB',
        'validFrom': '10/08/2020',
        'validTo': null,
      };

      const updateItemField = {
        'variables': {
          'action': {
            'value': 'PATCH',
            'type': 'String',
          },
          'object': {
            'value': 'Item',
            'type': 'String',
          },
          'entityName': {
            'value': 'country',
            'type': 'String',
          },
          'requestedDateTime': {
            'value': utcTimeStampString,
            'type': 'String',
          },
          'changeRequested': {
            'value': JSON.stringify(body),
            'type': 'json',
          },
        },
      };

      // nock Camunda response
      nock(config.camundaUrls.baseUrl)
        .post('/engine-rest/process-definition/key/reference-data-approval/submit-form', updateItemField)
        .reply(200, {
          'businessKey': null,
          'caseInstanceId': null,
          'definitionId': 'reference-data-approval:1:961a6e12-7ba7-11e9-b1ca-024207321f63',
          'ended': false,
          'id': 'ddd671b5-7e2c-11e9-8e6e-02428e247f3f',
          'links': [
            {
              'href': 'http://localhost:8080/engine-rest/process-instance/ddd671b5-7e2c-11e9-8e6e-02428e247f3f',
              'method': 'GET',
              'rel': 'self',
            },
          ],
          'suspended': false,
          'tenantId': null,
        });

      // hit API /v1/entities/country
      return request(app)
        .patch('/v1/entities/country/items/3')
        .send(body)
        .set('Accept', 'application/json')
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.deep.equal({ 'status': 200, 'requestId': 'ddd671b5-7e2c-11e9-8e6e-02428e247f3f' });
        });
    });
  });


  after(() => {
    // enable logging
    logger.silent = false;
  });
});
