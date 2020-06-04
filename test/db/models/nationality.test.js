const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { Nationality } = require('../../../app/db/models/nationality');

describe('Given the Nationality model', () => {
  const tableColumns = [
    'id',
    'nationality',
    'description',
    'iso31661alpha3',
    'iso31661alpha2',
    'visarequired',
    'evwoptional',
    'diplomaticexception',
    'specialexception',
    'countryid',
    'validfrom',
    'validto',
  ];

  before(() => {
    this.sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });
  });

  describe('when initialized', () => {
    before(() => {
      Nationality.init(this.sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new Nationality();
    });

    it('should have the correct table name', () => {
      expect(Nationality.getTableName()).to.eql('nationality');
    });

    tableColumns.forEach((column) => {
      it(`should have a "${column}" column`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
