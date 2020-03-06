const httpMocks = require('node-mocks-http');
const jwtSimple = require('jwt-simple');
const nock = require('nock');
const request = require('supertest');
const { expect } = require('chai');

// local imports
const app = require('../../app/routes');
const config = require('../../app/config/core');

config.keycloakClientPublicKey = 'keycloakClientPublicKey';
config.iss = 'iss';
config.keycloakClientId = 'keycloakClientId';

describe('Test Item Routes', () => {
  describe('PATCH /v1/entities/:name/items/:id', () => {
    // create a token with an expiry date 1 hour in the future
    let expiryTime = new Date();
    expiryTime.setHours(expiryTime.getHours() + 1);
    expiryTime = Math.round(expiryTime / 1000);
    const payload = {
      name: 'Pedro Curado',
      email: 'pedro@mail.com',
      exp: expiryTime,
      refdbrole: 'refreadonly',
      iss: config.iss,
      aud: ['operational-data-api', 'api-ref', config.keycloakClientId],
    };
    const token = jwtSimple.encode(payload, config.keycloakClientPublicKey);

    it('Should return an array with errors if the payload is empty', () => {
      // create an empty payload
      const body = {};
      const expectedErrors = {
        errors: [
          {
            location: 'body',
            param: 'field',
            msg: 'Invalid value',
          },
          {
            location: 'body',
            param: 'newValue',
            msg: 'Invalid value',
          },
        ],
      };

      // hit API /v1/entities/country/items/3
      return request(app)
        .patch('/v1/entities/country/items/3')
        .set('Authorization', `Bearer ${token}`)
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
        field: 'iso31661alpha2',
        newValue: 'AB',
        validFrom: '10/08/2020',
        validTo: null,
      };

      const updateItemField = {
        variables: {
          action: {
            value: 'PATCH',
            type: 'String',
          },
          object: {
            value: 'Item',
            type: 'String',
          },
          entityName: {
            value: 'country',
            type: 'String',
          },
          requestedDateTime: {
            value: utcTimeStampString,
            type: 'String',
          },
          changeRequested: {
            value: JSON.stringify({
              field: 'iso31661alpha2',
              newValue: 'AB',
              validFrom: '10/08/2020',
              validTo: null,
              id: '3',
            }),
            type: 'json',
          },
        },
      };

      // nock Camunda response
      nock(config.camundaUrls.baseUrl)
        .post('/engine-rest/process-definition/key/reference-data-approval/submit-form', updateItemField)
        .reply(200, {
          businessKey: null,
          caseInstanceId: null,
          definitionId: 'reference-data-approval:1:961a6e12-7ba7-11e9-b1ca-024207321f63',
          ended: false,
          id: 'ddd671b5-7e2c-11e9-8e6e-02428e247f3f',
          links: [
            {
              href: 'http://localhost:8080/engine-rest/process-instance/ddd671b5-7e2c-11e9-8e6e-02428e247f3f',
              method: 'GET',
              rel: 'self',
            },
          ],
          suspended: false,
          tenantId: null,
        });

      // hit API /v1/entities/country/items/3
      return request(app)
        .patch('/v1/entities/country/items/3')
        .set('Authorization', `Bearer ${token}`)
        .send(body)
        .set('Accept', 'application/json')
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.deep.equal({ status: 200, requestId: 'ddd671b5-7e2c-11e9-8e6e-02428e247f3f' });
        });
    });
  });
});
