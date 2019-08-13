const { expect } = require('chai');

// local imports
const {
  queryFilterDecode,
  queryFilterDecodeV2,
} = require('../../app/db/utils');

describe('Test Database Utils', () => {
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

  describe('queryFilterDecodeV2', () => {
    it('Should return a querystring with all columns selected filtered by greater then value', () => {
      const name = 'team';
      const queryParams = {
        'filter': [
          'id=gt.3',
        ],
      };
      const expectedQueryFilter = `SELECT * FROM ${name} WHERE id > 3;`;
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should return a querystring with all columns selected filtered by greater or equal then value', () => {
      const name = 'team';
      const queryParams = {
        'filter': [
          'id=gte.3',
        ],
      };
      const expectedQueryFilter = `SELECT * FROM ${name} WHERE id >= 3;`;
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should return a querystring with all columns selected filtered by less then value', () => {
      const name = 'team';
      const queryParams = {
        'filter': [
          'id=lt.3',
        ],
      };
      const expectedQueryFilter = `SELECT * FROM ${name} WHERE id < 3;`;
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should return a querystring with all columns selected filtered by less or equal then value', () => {
      const name = 'team';
      const queryParams = {
        'filter': [
          'id=lte.3',
        ],
      };
      const expectedQueryFilter = `SELECT * FROM ${name} WHERE id <= 3;`;
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should return a querystring with all columns selected filtered by equal to value (integer)', () => {
      const name = 'team';
      const queryParams = {
        'filter': [
          'id=eq.3',
        ],
      };
      const expectedQueryFilter = `SELECT * FROM ${name} WHERE id = 3;`;
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should return a querystring with all columns selected filtered by equal to value (string)', () => {
      const name = 'country';
      const queryParams = {
        'filter': [
          'name=eq.Portugal',
        ],
      };
      const expectedQueryFilter = `SELECT * FROM ${name} WHERE name = 'Portugal';`;
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should return a querystring with all columns selected filtered by value is null', () => {
      const name = 'nationality';
      const queryParams = {
        'filter': [
          'validfrom=eq.null',
        ],
      };
      const expectedQueryFilter = `SELECT * FROM ${name} WHERE validfrom IS NULL;`;
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should return a querystring with all columns selected filtered by not equal to value', () => {
      const name = 'country';
      const queryParams = {
        'filter': [
          'name=neq.Spain',
        ],
      };
      const expectedQueryFilter = `SELECT * FROM ${name} WHERE name != 'Spain';`;
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should return a querystring with all columns selected filtered by not null value', () => {
      const name = 'country';
      const queryParams = {
        'filter': [
          'name=neq.null',
        ],
      };
      const expectedQueryFilter = `SELECT * FROM ${name} WHERE name IS NOT NULL;`;
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should return a querystring with all columns selected filtered by any value provided', () => {
      const name = 'country';
      const queryParams = {
        'filter': [
          'region=in.(EU)',
        ],
      };
      const expectedQueryFilter = `SELECT * FROM ${name} WHERE region IN ('EU');`;
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should return a querystring with all columns selected filtered by value equal to, and any value in tuple', () => {
      const name = 'country';
      const queryParams = {
        'filter': [
          'name=eq.Portugal',
          'region=in.(EU, AS)',
        ],
      };
      const expectedQueryFilter = `SELECT * FROM ${name} WHERE name = 'Portugal' AND region IN ('EU', 'AS');`;
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.a('string');
      expect(queryFilter).to.equal(expectedQueryFilter);
    });

    it('Should return a querystring with all columns selected filtered by value equal to, and a limit of 5 rows', () => {
      const name = 'roles';
      const queryParams = {
        'filter': [
          'name=eq.Tilbury 1',
          'city=eq.London',
        ],
        'limit': '5',
      };
      const expectedQuery = `SELECT * FROM ${name} WHERE name = 'Tilbury 1' AND city = 'London' LIMIT 5;`;
      const query = queryFilterDecodeV2({ name, queryParams });

      expect(query).to.equal(expectedQuery);
    });

    it('Should return a querystring with all columns and a limit of 1 row', () => {
      const name = 'roles';
      const queryParams = { 'limit': '1' };
      const expectedQuery = `SELECT * FROM ${name} LIMIT 1;`;
      const query = queryFilterDecodeV2({ name, queryParams });

      expect(query).to.equal(expectedQuery);
    });

    it('Should return an empty querystring if limit is a negative integer', () => {
      const name = 'roles';
      const queryParams = { 'limit': '-1' };
      const query = queryFilterDecodeV2({ name, queryParams });

      expect(query).to.equal('');
    });

    it('Should return an empty querystring if limit is a string', () => {
      const name = 'roles';
      const queryParams = { 'limit': '-13' };
      const query = queryFilterDecodeV2({ name, queryParams });

      expect(query).to.equal('');
    });

    it('Should return an empty querystring if there is more than one select in the query params', () => {
      const name = 'roles';
      const queryParams = {
        'limit': ['3', '77'],
        'select': ['name,age', 'location'],
      };
      const query = queryFilterDecodeV2({ name, queryParams });

      expect(query).to.equal('');
    });
  });
});
