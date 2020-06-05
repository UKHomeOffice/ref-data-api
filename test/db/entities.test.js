const { expect } = require('chai');
const sinon = require('sinon');

// local imports
const { readPool } = require('../../app/db/index');
const { getAllEntities, getEntityDescription, getEntitySchema, getEntityData } = require('../../app/db/entities');

describe('Test Entity Queries', () => {
  afterEach(() => {
    readPool.query.restore();
  });

  describe('getEntityDescription', () => {
    it('Should resolve table description', () => {
      const obj = { rows: [{ description: '{"description": "Countries", "schemalastupdated": "10/03/2019", "dataversion": 1}' }] };
      sinon.stub(readPool, 'query').resolves(obj);

      return getEntityDescription('country').then((result) => {
        expect(result).to.be.an('object');
        expect(result).to.be.an('object').to.include.all.keys('description');
        expect(result.description)
          .to.be.an('object')
          .to.include.all.keys('description', 'schemalastupdated', 'dataversion');
      });
    });

    it('Should reject with an error if the table does not exist', () => {
      const expectedMsg = 'Unable to retrieve description from table country';
      sinon.stub(readPool, 'query').rejects();

      return getEntityDescription('country').catch(error => expect(error.message).to.eql(expectedMsg));
    });
  });

  describe('getEntitySchema', () => {
    it('Should resolve a table schema', () => {
      const obj = {
        rows: [
          {
            column_name: 'id',
            is_nullable: 'NO',
            data_type: 'integer',
            character_maximum_length: null,
            description:
              '{"label": "Identifier", "description": "database unique identity record", "summaryview": "false"}',
          },
          {
            column_name: 'nationality',
            is_nullable: 'NO',
            data_type: 'character varying',
            character_maximum_length: 330,
            description: '{"label": "Identifier", "description": "Nationality names", "summaryview": "true"}',
          },
          {
            column_name: 'iso31661alpha3',
            is_nullable: 'YES',
            data_type: 'character varying',
            character_maximum_length: 3,
            description:
              '{"label": "3 digit alpha code", "description": "Country 3 Character alpha code", "summaryview": "true"}',
          },
          {
            column_name: 'iso31661alpha2',
            is_nullable: 'YES',
            data_type: 'character varying',
            character_maximum_length: 2,
            description:
              '{"label": "2 digit alpha code", "description": "Country 2 Character alpha code", "summaryview": "true"}',
          },
          {
            column_name: 'visarequired',
            is_nullable: 'NO',
            data_type: 'boolean',
            character_maximum_length: null,
            description:
              '{"label": "Visa required", "description": "Is VISA required to visit UK", "summaryview": "false"}',
          },
          {
            column_name: 'evwoptional',
            is_nullable: 'NO',
            data_type: 'boolean',
            character_maximum_length: null,
            description:
              '{"label": "Optional - EVW", "description": "Is Electronic Visa Waver optional to visit UK", "summaryview": "false"}',
          },
          {
            column_name: 'diplomaticexception',
            is_nullable: 'NO',
            data_type: 'boolean',
            character_maximum_length: null,
            description:
              '{"label": "Exception - Diplomatic", "description": "Are there diplomatic exceptions for visiting the UK", "summaryview": "false"}',
          },
          {
            column_name: 'specialexception',
            is_nullable: 'NO',
            data_type: 'boolean',
            character_maximum_length: null,
            description:
              '{"label": "Exception - Special", "description": "Are there special exceptions for visiting the UK", "summaryview": "false"}',
          },
          {
            column_name: 'countryid',
            is_nullable: 'YES',
            data_type: 'integer',
            character_maximum_length: null,
            description:
              '{"label": "Linked country id", "description": "Country link to Country dataset", "summaryview": "false"}',
          },
          {
            column_name: 'validfrom',
            is_nullable: 'YES',
            data_type: 'date',
            character_maximum_length: null,
            description: '{"label": "Valid from date", "description": "Item valid from date", "summaryview" : "false"}',
          },
          {
            column_name: 'validto',
            is_nullable: 'YES',
            data_type: 'date',
            character_maximum_length: null,
            description: '{"label": "Valid to date", "description": "Item valid to date", "summaryview" : "false"}',
          },
        ],
      };
      const expectedData = {
        required: ['id', 'nationality', 'visarequired', 'evwoptional', 'diplomaticexception', 'specialexception'],
        properties: {
          id: {
            maxLength: null,
            format: 'integer',
            type: 'integer',
            description: {
              label: 'Identifier',
              description: 'database unique identity record',
              summaryview: 'false',
            },
          },
          nationality: {
            maxLength: 330,
            format: 'character varying',
            type: 'character varying',
            description: {
              label: 'Identifier',
              description: 'Nationality names',
              summaryview: 'true',
            },
          },
          iso31661alpha3: {
            maxLength: 3,
            format: 'character varying',
            type: 'character varying',
            description: {
              label: '3 digit alpha code',
              description: 'Country 3 Character alpha code',
              summaryview: 'true',
            },
          },
          iso31661alpha2: {
            maxLength: 2,
            format: 'character varying',
            type: 'character varying',
            description: {
              label: '2 digit alpha code',
              description: 'Country 2 Character alpha code',
              summaryview: 'true',
            },
          },
          visarequired: {
            maxLength: null,
            format: 'boolean',
            type: 'boolean',
            description: {
              label: 'Visa required',
              description: 'Is VISA required to visit UK',
              summaryview: 'false',
            },
          },
          evwoptional: {
            maxLength: null,
            format: 'boolean',
            type: 'boolean',
            description: {
              label: 'Optional - EVW',
              description: 'Is Electronic Visa Waver optional to visit UK',
              summaryview: 'false',
            },
          },
          diplomaticexception: {
            maxLength: null,
            format: 'boolean',
            type: 'boolean',
            description: {
              label: 'Exception - Diplomatic',
              description: 'Are there diplomatic exceptions for visiting the UK',
              summaryview: 'false',
            },
          },
          specialexception: {
            maxLength: null,
            format: 'boolean',
            type: 'boolean',
            description: {
              label: 'Exception - Special',
              description: 'Are there special exceptions for visiting the UK',
              summaryview: 'false',
            },
          },
          countryid: {
            maxLength: null,
            format: 'integer',
            type: 'integer',
            description: {
              label: 'Linked country id',
              description: 'Country link to Country dataset',
              summaryview: 'false',
            },
          },
          validfrom: {
            maxLength: null,
            format: 'date',
            type: 'date',
            description: {
              label: 'Valid from date',
              description: 'Item valid from date',
              summaryview: 'false',
            },
          },
          validto: {
            maxLength: null,
            format: 'date',
            type: 'date',
            description: {
              label: 'Valid to date',
              description: 'Item valid to date',
              summaryview: 'false',
            },
          },
        },
      };
      sinon.stub(readPool, 'query').resolves(obj);

      return getEntitySchema('refreadonly', 'nationality').then((result) => {
        expect(result).to.be.an('object');
        expect(result).to.deep.equal(expectedData);
        expect(result.properties)
          .to.be.an('object')
          .to.include.all.keys(
            'id',
            'nationality',
            'iso31661alpha3',
            'iso31661alpha2',
            'visarequired',
            'evwoptional',
            'diplomaticexception',
            'specialexception',
            'countryid',
            'validfrom',
            'validto',
          );
      });
    });

    it('Should reject with an error if the table or the role do not exist', () => {
      const expectedMsg = 'Unable to retrieve schema from table nationality';
      sinon.stub(readPool, 'query').rejects();

      return getEntitySchema('refreadonly', 'nationality').catch(error => expect(error.message).to.eql(expectedMsg));
    });
  });

  describe('getAllEntities', () => {
    it('Should resolve all database entities', () => {
      const obj = {
        rows: [
          {
            schemaname: 'reference',
            tablename: 'currency',
            tableowner: 'ownerreference',
            tablespace: null,
            hasindexes: true,
            hasrules: false,
            hastriggers: false,
            rowsecurity: false,
          },
        ],
      };
      sinon.stub(readPool, 'query').resolves(obj);

      return getAllEntities().then((result) => {
        expect(result).to.be.an('array');
        expect(result).to.have.lengthOf(1);
        expect(result).to.eql(['currency']);
      });
    });

    it('Should reject with an error if the schemaname does not exist', () => {
      const expectedMsg = 'Unable to retrieve tables from database';
      sinon.stub(readPool, 'query').rejects();

      return getAllEntities().catch(error => expect(error.message).to.eql(expectedMsg));
    });
  });

  describe('getEntityData', () => {
    it('Should resolve table data rows', () => {
      const obj = {
        rows: [
          {
            id: 1,
            iso31661alpha2: 'PT',
            iso31661alpha3: 'PRT',
            name: 'Portugal',
            continent: 'EU',
            dial: '351',
            iso31661numeric: 620,
            validfrom: null,
            validto: null,
          },
          {
            id: 2,
            iso31661alpha2: 'GB',
            iso31661alpha3: 'GBR',
            name: 'United Kingdom',
            continent: 'EU',
            dial: '44',
            iso31661numeric: 826,
            validfrom: null,
            validto: null,
          },
        ],
      };
      sinon.stub(readPool, 'query').resolves(obj);

      return getEntityData('refreadonly', 'country', null).then((result) => {
        expect(result).to.be.an('array');
        expect(result).to.deep.equal(obj.rows);
        expect(result[0])
          .to.be.an('object')
          .to.include.all.keys(
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

    it('Should reject with an error if the table does not exist', () => {
      const expectedMsg = 'Unable to retrieve data from table addresss';
      sinon.stub(readPool, 'query').rejects();

      return getEntityData('refreadonly', 'addresss', '').catch(error => expect(error.message).to.eql(expectedMsg));
    });
  });
});
