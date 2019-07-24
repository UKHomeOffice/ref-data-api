const { expect } = require('chai');

// local imports
const logger = require('../../app/config/logger');
const queryFilterDecode = require('../../app/db/utils');

describe('Test Database Utils', () => {
  before(() => {
    // disable logging
    logger.silent = true;
  });

  describe('queryFilterDecode', () => {
    it('Should resolve single "gt" filtering using integer values', () => {
      const queryParams = 'id=gt.3';
      const expectedQueryFilter = 'id > 3';

      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });
    it('Should resolve single "gte" filtering using integer values', () => {
      const queryParams = 'id=gte.3';
      const expectedQueryFilter = 'id >= 3';

      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should resolve single "lt" filtering using integer values', () => {
      const queryParams = 'id=lt.3';
      const expectedQueryFilter = 'id < 3';

      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should resolve single "lte" filtering using integer values', () => {
      const queryParams = 'id=lte.3';
      const expectedQueryFilter = 'id <= 3';

      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should resolve single "eq" filtering using integer values', () => {
      const queryParams = 'id=eq.3';
      const expectedQueryFilter = 'id = 3';

      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should resolve single "eq" filtering using string values', () => {
      const queryParams = 'country=eq.Portugal';
      const expectedQueryFilter = 'country = \'Portugal\'';

      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should resolve single "eq" filtering using null values', () => {
      const queryParams = 'validfrom=eq.null';
      const expectedQueryFilter = 'validfrom IS NULL';

      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should resolve single "neq" filtering using string values', () => {
      const queryParams = 'country=neq.Spain';
      const expectedQueryFilter = 'country != \'Spain\'';

      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should resolve single "neq" filtering using null values', () => {
      const queryParams = 'validfrom=neq.null';
      const expectedQueryFilter = 'validfrom IS NOT NULL';

      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should resolve single "in" filtering', () => {
      const queryParams = 'region=in.%28EU%29';
      const expectedQueryFilter = 'region IN (\'EU\')';

      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should resolve a multi "in" filtering', () => {
      const queryParams = 'country=eq.Portugal&region=in.%28EU,%20AS%29';
      const expectedQueryFilter = 'country = \'Portugal\' AND region IN (\'EU\', \'AS\')';

      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });
  });

  after(() => {
    // enable logging
    logger.silent = false;
  });
});
