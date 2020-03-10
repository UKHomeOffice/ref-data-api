const { expect } = require('chai');
const sinon = require('sinon');

// local imports
const helpers = require('../../app/db/helpers');
const {
  queryFilterDecode,
  queryFilterDecodeV2,
} = require('../../app/db/queryFilterDecoder');

describe('Test Database Utils', () => {
  describe('queryFilterDecode', () => {
    it('Should resolve single "gt" filtering using integer values', () => {
      const queryParams = 'id=gt.3';
      const expectedQueryObject = {
        queryString: 'id > $1',
        values: ['3'],
      };
      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should resolve single "gte" filtering using integer values', () => {
      const queryParams = 'id=gte.3';
      const expectedQueryObject = {
        queryString: 'id >= $1',
        values: ['3'],
      };
      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should resolve single "lt" filtering using integer values', () => {
      const queryParams = 'id=lt.3';
      const expectedQueryObject = {
        queryString: 'id < $1',
        values: ['3'],
      };
      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should resolve single "lte" filtering using integer values', () => {
      const queryParams = 'id=lte.3';
      const expectedQueryObject = {
        queryString: 'id <= $1',
        values: ['3'],
      };
      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should resolve single "eq" filtering using integer values', () => {
      const queryParams = 'id=eq.3';
      const expectedQueryObject = {
        queryString: 'id = $1',
        values: ['3'],
      };
      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should resolve single "eq" filtering using string values', () => {
      const queryParams = 'country=eq.Portugal';
      const expectedQueryObject = {
        queryString: 'country = $1',
        values: ['Portugal'],
      };
      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should resolve single "eq" filtering using null values', () => {
      const queryParams = 'validfrom=eq.null';
      const expectedQueryObject = {
        queryString: 'validfrom IS NULL',
        values: [],
      };
      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should resolve single "neq" filtering using string values', () => {
      const queryParams = 'country=neq.Spain';
      const expectedQueryObject = {
        queryString: 'country != $1',
        values: ['Spain'],
      };
      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should resolve single "neq" filtering using null values', () => {
      const queryParams = 'validfrom=neq.null';
      const expectedQueryObject = {
        queryString: 'validfrom IS NOT NULL',
        values: [],
      };
      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should resolve single "in" filtering', () => {
      const queryParams = 'region=in.%28EU%29';
      const expectedQueryObject = {
        queryString: 'region IN ($1)',
        values: ['EU'],
      };
      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should resolve a multi "in" filtering', () => {
      const queryParams = 'country=eq.Portugal&region=in.%28EU,%20AS%29';
      const expectedQueryObject = {
        queryString: 'country = $1 AND region IN ($2, $3)',
        values: ['Portugal', 'EU', 'AS'],
      };
      const queryFilter = queryFilterDecode(queryParams);

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });
  });

  describe('queryFilterDecodeV2', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('Should return a querystring with all columns selected filtered by greater then value', () => {
      const name = 'team';
      const queryParams = {
        filter: [
          'id=gt.3',
        ],
      };
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} WHERE id > $1`,
        values: ['3'],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with all columns selected filtered by greater or equal then value', () => {
      const name = 'team';
      const queryParams = {
        filter: [
          'id=gte.3',
        ],
      };
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} WHERE id >= $1`,
        values: ['3'],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with all columns selected filtered by less then value', () => {
      const name = 'team';
      const queryParams = {
        filter: [
          'id=lt.3',
        ],
      };
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} WHERE id < $1`,
        values: ['3'],
      };

      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with all columns selected filtered by less or equal then value', () => {
      const name = 'team';
      const queryParams = {
        filter: [
          'id=lte.3',
        ],
      };
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} WHERE id <= $1`,
        values: ['3'],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with all columns selected filtered by equal to value (integer)', () => {
      const name = 'team';
      const queryParams = {
        filter: [
          'id=eq.3',
        ],
      };
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} WHERE id = $1`,
        values: ['3'],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with all columns selected filtered by equal to value (string)', () => {
      const name = 'country';
      const queryParams = {
        filter: [
          'name=eq.Portugal',
        ],
      };
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} WHERE name = $1`,
        values: ['Portugal'],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with all columns selected filtered by value is null', () => {
      const name = 'nationality';
      const queryParams = {
        filter: [
          'validfrom=eq.null',
        ],
      };
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} WHERE validfrom IS NULL`,
        values: [],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with all columns selected filtered by not equal to value', () => {
      const name = 'country';
      const queryParams = {
        filter: [
          'name=neq.Spain',
        ],
      };
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} WHERE name != $1`,
        values: ['Spain'],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with all columns selected filtered by not null value', () => {
      const name = 'country';
      const queryParams = {
        filter: [
          'name=neq.null',
        ],
      };
      const expectedQueryFilter = `SELECT * FROM ${name} WHERE name IS NOT NULL;`;
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} WHERE name IS NOT NULL`,
        values: [],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with all columns selected filtered by any value provided', () => {
      const name = 'country';
      const queryParams = {
        filter: [
          'region=in.(EU)',
        ],
      };
      const expectedQueryFilter = `SELECT * FROM ${name} WHERE region IN ('EU');`;
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} WHERE region IN ($1)`,
        values: ['EU'],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with all columns selected filtered by value equal to, and any value in tuple', () => {
      const name = 'country';
      const queryParams = {
        filter: [
          'name=eq.Portugal',
          'region=in.(EU, AS)',
        ],
      };
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} WHERE name = $1 AND region IN ($2, $3)`,
        values: ['Portugal', 'EU', 'AS'],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with all columns selected filtered by value equal to, and a limit of 5 rows', () => {
      const name = 'roles';
      const queryParams = {
        filter: [
          'name=eq.Tilbury 1',
          'city=eq.London',
        ],
        limit: '5',
      };
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} WHERE name = $2 AND city = $3 LIMIT $1`,
        values: ['5', 'Tilbury 1', 'London'],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with all columns and a limit of 1 row', () => {
      const name = 'roles';
      const queryParams = { limit: '1' };
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} LIMIT $1`,
        values: ['1'],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return an empty querystring if limit is a negative integer', () => {
      const name = 'roles';
      const queryParams = { limit: '-1' };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter.queryString).to.equal('');
    });

    it('Should return an empty querystring if limit is a string', () => {
      const name = 'roles';
      const queryParams = { limit: '-13' };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter.queryString).to.equal('');
    });

    it('Should return an empty querystring if there is more than one select in the query params', () => {
      const name = 'roles';
      const queryParams = {
        limit: ['3', '77'],
        select: ['name,age', 'location'],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter.queryString).to.equal('');
    });

    it('Should return an empty querystring if there is more than one select in the query params', () => {
      const name = 'users';
      const queryParams = {
        limit: '3',
        select: 'name,age',
        filter: [
          'name=eq.John',
          'age=eq.34',
        ],
      };
      const expectedQueryObject = {
        queryString: `SELECT name,age FROM ${name} WHERE name = $2 AND age = $3 LIMIT $1`,
        values: ['3', 'John', '34'],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with a column selected ordered by column ascending', () => {
      const name = 'country';
      const queryParams = {
        limit: '3',
        select: 'name',
        sort: 'name.asc',
      };
      const expectedQueryObject = {
        queryString: `SELECT name FROM ${name} ORDER BY name ASC LIMIT $1`,
        values: ['3'],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with all columns selected, filtered by name and age, sorted by name asc, age desc, and a limit of 3 rows', () => {
      const name = 'country';
      const queryParams = {
        limit: '3',
        filter: [
          'name=eq.John',
          'age=eq.null',
        ],
        sort: 'name.asc,age.desc',
      };
      const expectedQueryFilter = `SELECT * FROM ${name} WHERE name = 'John' AND age IS NULL ORDER BY name ASC, age DESC LIMIT 3;`;
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} WHERE name = $2 AND age IS NULL ORDER BY name ASC, age DESC LIMIT $1`,
        values: ['3', 'John'],
      };
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with all columns selected, filtered by continent and valid date time range ', () => {
      const name = 'country';
      const queryParams = {
        filter: [
          'continent=eq.EU',
        ],
        validDateTime: 'true',
      };
      const fakeDateTimeRangeObj = {
        hoursBehind: '2020-02-20T06:13:00.133Z',
        hoursAhead: '2020-02-20T18:13:00.133Z',
      };
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} WHERE continent = $1 AND ($2 >= validfrom OR validfrom IS NULL) AND ($3 <= validto OR validto IS NULL)`,
        values: ['EU', fakeDateTimeRangeObj.hoursBehind, fakeDateTimeRangeObj.hoursAhead],
      };

      sinon.stub(helpers, 'dateTimeRange').returns(fakeDateTimeRangeObj);
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });

    it('Should return a querystring with all columns selected, filtered by valid date time range ', () => {
      const name = 'country';
      const queryParams = { validDateTime: 'true' };
      const fakeDateTimeRangeObj = {
        hoursBehind: '2020-02-20T06:13:00.133Z',
        hoursAhead: '2020-02-20T18:13:00.133Z',
      };
      const expectedQueryObject = {
        queryString: `SELECT * FROM ${name} WHERE ($1 >= validfrom OR validfrom IS NULL) AND ($2 <= validto OR validto IS NULL)`,
        values: [fakeDateTimeRangeObj.hoursBehind, fakeDateTimeRangeObj.hoursAhead],
      };

      sinon.stub(helpers, 'dateTimeRange').returns(fakeDateTimeRangeObj);
      const queryFilter = queryFilterDecodeV2({ name, queryParams });

      expect(queryFilter).to.be.an('object');
      expect(queryFilter).to.deep.equal(expectedQueryObject);
    });
  });
});
