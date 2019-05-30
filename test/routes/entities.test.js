const jwtSimple = require('jwt-simple');
const nock = require('nock');
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

// local imports
const app = require('../../routes');
const config = require('../../config/core');
const logger = require('../../config/logger');
const pool = require('../../db/index');

describe('Test Entity Routes', () => {
  before(() => {
    // disable logging
    logger.silent = true;
  });

  describe('GET /v1/entities', () => {
    const entities = {
      'rows': [{
        'schemaname': 'reference',
        'tablename': 'team',
        'tableowner': 'ownerreference',
        'tablespace': null,
        'hasindexes': true,
        'hasrules': false,
        'hastriggers': false,
        'rowsecurity': false,
      }],
    };
    const entityDescription = {
      'rows': [
        {
          'description': '{"description": "Team", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        },
      ],
    };
    const entitySchema = {
      'rows': [
        {
          'column_name': 'name',
          'is_nullable': 'NO',
          'data_type': 'character varying',
          'character_maximum_length': 330,
          'description': '{"label": "Identifier", "description": "database unique identity record", "summaryview": "false"}',
        },
      ],
    };
    const entityData = {
      'rows': [
        {
          'id': '9a42efd1-7483-4946-8bb8-d7bcb9a3bf38',
          'name': 'The Viable Team',
          'code': 'BF0046',
          'description': null,
          'costcentrecode': null,
          'parentteamid': null,
          'bffunctiontypeid': '3ea8635b-244a-48b8-a0ca-c3c168167161',
          'ministryid': 1,
          'departmentid': 1,
          'directorateid': 3,
          'branchid': null,
          'divisionid': null,
          'commandid': null,
          'validfrom': null,
          'validto': null,
        },
      ],
    };

    // create a token with an expiry date 1 hour in the future
    const expiryTime = new Date();
    expiryTime.setHours(expiryTime.getHours() + 1);
    const payload = {
      'name': 'Pedro Curado',
      'email': 'pedro@mail.com',
      'exp': expiryTime.getTime(),
      'refdbrole': 'readonlyreference',
    };
    const secret = 'super-secret-19';
    const token = jwtSimple.encode(payload, secret);

    it('Should return all entities on success', () => {
      const queryStub = sinon.stub(pool, 'query');
      queryStub.onCall(0).resolves(entities);
      queryStub.onCall(1).resolves(entityDescription);
      // set the role
      queryStub.onCall(2).resolves('SET');
      // once the role is set, get the entity schema
      queryStub.onCall(3).resolves(entitySchema);

      return request(app)
        .get('/v1/entities')
        .set('Authorization', 'Bearer ' + token)
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('object').to.include.all.keys(
            'code',
            'data',
            'status',
          );
        });
    });
  });

  describe('PATCH /v1/entities/:name', () => {
    // create a token with an expiry date 1 hour in the future
    const expiryTime = new Date();
    expiryTime.setHours(expiryTime.getHours() + 1);
    const payload = {
      'name': 'Pedro Curado',
      'email': 'pedro@mail.com',
      'exp': expiryTime.getTime(),
      'refdbrole': 'readonlyreference',
    };
    const secret = 'super-secret-19';
    const token = jwtSimple.encode(payload, secret);

    it('Should return an array with errors if the payload is empty', () => {
      // create an empty payload
      const body = {};
      const expectedErrors = {
        'errors': [
          {
            'location': 'body',
            'param': 'entity',
            'msg': 'Invalid value',
          },
          {
            'location': 'body',
            'param': 'field',
            'msg': 'Invalid value',
          },
          {
            'location': 'body',
            'param': 'newValue',
            'msg': 'Invalid value',
          },
          {
            'location': 'body',
            'param': 'validFrom',
            'msg': 'Invalid value',
          },
          {
            'location': 'body',
            'param': 'validTo',
            'msg': 'Invalid value',
          },
        ],
      };

      // hit API /v1/entities/country
      return request(app)
        .patch('/v1/entities/country')
        .set('Authorization', `Bearer ${token}`)
        .send(body)
        .set('Accept', 'application/json')
        .then((response) => {
          expect(response.status).to.equal(422);
          expect(response.body).to.deep.equal(expectedErrors);
        });
    });

    it('Should submit a successful request to update schema field', () => {
      const date = new Date();
      const utcTimeStampString = date.toUTCString();

      const body = {
        'entity': 'country',
        'field': 'description',
        'newValue': 'This entity list all the existing countries up to 2019',
        'validFrom': '10/08/2019',
        'validTo': null,
      };

      const newEntityItem = {
        'variables': {
          'action': {
            'value': 'PATCH',
            'type': 'string',
          },
          'object': {
            'value': 'Schema',
            'type': 'string',
          },
          'entityName': {
            'value': 'country',
            'type': 'string',
          },
          'requestedDateTime': {
            'value': utcTimeStampString,
            'type': 'string',
          },
          'changeRequested': {
            'value': JSON.stringify(body),
            'type': 'json',
          },
        },
      };

      // mock Camunda response
      nock(config.camundaUrls.baseUrl)
        .post('/engine-rest/process-definition/key/reference-data-approval/submit-form', newEntityItem)
        .reply(200, {
          'businessKey': null,
          'caseInstanceId': null,
          'definitionId': 'reference-data-approval:1:961a6e12-7ba7-11e9-b1ca-024207321f63',
          'ended': false,
          'id': 'b7ef3ef1-7d61-11e9-9d6b-0242ef52c696',
          'links': [
            {
              'href': 'http://localhost:8080/engine-rest/process-instance/b7ef3ef1-7d61-11e9-9d6b-0242ef52c696',
              'method': 'GET',
              'rel': 'self',
            },
          ],
          'suspended': false,
          'tenantId': null,
        });

      // hit API /v1/entities/country
      return request(app)
        .patch('/v1/entities/country')
        .set('Authorization', `Bearer ${token}`)
        .send(body)
        .set('Accept', 'application/json')
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.deep.equal({ 'status': 200, 'requestId': 'b7ef3ef1-7d61-11e9-9d6b-0242ef52c696' });
        });
    });
  });

  describe('POST /v1/entities/:name', () => {
    // create a token with an expiry date 1 hour in the future
    const expiryTime = new Date();
    expiryTime.setHours(expiryTime.getHours() + 1);
    const payload = {
      'name': 'Pedro Curado',
      'email': 'pedro@mail.com',
      'exp': expiryTime.getTime(),
      'refdbrole': 'readonlyreference',
    };
    const secret = 'super-secret-19';
    const token = jwtSimple.encode(payload, secret);

    it('Should return error if the payload is not an object', () => {
      // create an invalid JSON object
      const newEntityItem = {};

      // hit API /v1/entities/country
      return request(app)
        .post('/v1/entities/country')
        .set('Authorization', `Bearer ${token}`)
        .send(newEntityItem)
        .set('Accept', 'application/json')
        .then((response) => {
          expect(response.status).to.equal(400);
          expect(response.body).to.deep.equal({ 'message': 'Invalid JSON object' });
        });
    });

    it('Should submit a successful request to create new entity item', () => {
      const date = new Date();
      const utcTimestampString = date.toUTCString();

      // new object to be submitted to Camunda
      const body = {
        'iso31661alpha2': 'FJ',
        'iso31661alpha3': 'FJI',
        'name': 'Fiji',
        'continent': 'OC',
        'dial': '679',
        'iso31661numeric': '242',
      };

      const newEntityItem = {
        'variables': {
          'action': {
            'value': 'POST',
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
            'value': utcTimestampString,
            'type': 'String',
          },
          'changeRequested': {
            'value': JSON.stringify(body),
            'type': 'json',
          },
        },
      };

      // mock Camunda response
      nock(config.camundaUrls.baseUrl)
        .post('/engine-rest/process-definition/key/reference-data-approval/submit-form', newEntityItem)
        .reply(200, {
          'businessKey': null,
          'caseInstanceId': null,
          'definitionId': 'reference-data-approval:1:961a6e12-7ba7-11e9-b1ca-024207321f63',
          'ended': false,
          'id': 'b7ef3ef1-7d61-11e9-9d6b-0242ef52c696',
          'links': [
            {
              'href': 'http://localhost:8080/engine-rest/process-instance/b7ef3ef1-7d61-11e9-9d6b-0242ef52c696',
              'method': 'GET',
              'rel': 'self',
            },
          ],
          'suspended': false,
          'tenantId': null,
        });

      // hit API /v1/entities/country
      return request(app)
        .post('/v1/entities/country')
        .set('Authorization', `Bearer ${token}`)
        .send(body)
        .set('Accept', 'application/json')
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.deep.equal({ 'status': 200, 'requestId': 'b7ef3ef1-7d61-11e9-9d6b-0242ef52c696' });
        });
    });
  });

  after(() => {
    // enable logging
    logger.silent = false;
  });

  afterEach(() => {
    sinon.restore();
  });
});
