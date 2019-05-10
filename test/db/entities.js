const { expect } = require('chai');
const sinon = require('sinon');

// local imports
const logger = require('../../config/logger');
const pool = require('../../db/index');

const {
  getData,
} = require('../../db/entities');

describe('Test Entity Routes', () => {
  before(() => {
    // disable logging
    logger.silent = true;
  });

  describe('Entity', () => {
    it('Should return all table data', async () => {
      const expectedData = {
        'rows': [
          {
            'id': 1,
            'iso31661alpha2': 'PT',
            'iso31661alpha3': 'PRT',
            'name': 'Portugal',
            'continent': 'EU',
            'dial': '351',
            'iso31661numeric': 620,
            'validfrom': null,
            'validto': null,
          },
          {
            'id': 2,
            'iso31661alpha2': 'GB',
            'iso31661alpha3': 'GBR',
            'name': 'United Kingdom',
            'continent': 'EU',
            'dial': '44',
            'iso31661numeric': 826,
            'validfrom': null,
            'validto': null,
          },
        ],
      };
      sinon.stub(pool, 'query').resolves(expectedData, null);
      const result = await getData('country');
      expect(result).to.deep.equal(expectedData.rows);
      expect(result[0]).to.include.all.keys(
        'id',
        'iso31661alpha2',
        'iso31661alpha3',
        'name',
        'continent',
        'dial',
        'iso31661numeric',
        'validfrom',
        'validto',
      );
    });
  });

  after(() => {
    // enable logging
    logger.silent = false;
  });
});
