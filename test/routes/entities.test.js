const request = require('supertest');
const express = require('express');
const sinon = require('sinon');
const { expect } = require('chai');

// local imports
const app = require('../../routes');
const logger = require('../../config/logger');
const pool = require('../../db/index');

describe('Test Entity Routes', () => {
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

  before(() => {
    // disable logging
    logger.silent = true;
  });

  describe('GET /v1/entities', () => {
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

  after(() => {
    // enable logging
    logger.silent = false;
  });

  afterEach(() => {
    pool.query.restore();
  });
});
