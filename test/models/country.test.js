const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { Country } = require('../../models/country');

describe('Given the Country model', () => {
  const tableColumns = [
    'id',
    'iso31661alpha3',
    'iso31661alpha2',
    'name',
    'continent',
    'dial',
    'iso31661numeric',
    'wicucode',
    'unm49code',
    'sovereignfcorecognisedstate',
    'linkedcountryiso3code',
    'relationshipwithlinkedcountry',
    'fullname',
    'un',
    'nato',
    'interpolcode',
    'visaregime',
    'commonwealth',
    'eu',
    'eea',
    'euoutermost',
    'euoverseasassociation',
    'validfrom',
    'validto',
  ];

  before(() => {
    this.sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });
  });

  describe('when initialized', () => {
    before(() => {
      Country.init(this.sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new Country();
    });

    it('should have the correct table name', () => {
      expect(Country.getTableName()).to.eql('country');
    });

    tableColumns.forEach((column) => {
      it(`should have a "${column}" column`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
