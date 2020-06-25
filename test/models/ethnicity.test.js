const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { Ethnicity } = require('../../models/ethnicity');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a Ethnicity model', () => {
  describe('when it is initialised', () => {
    before(() => {
      Ethnicity.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new Ethnicity();
    });
    it('should have the correct tableName', () => {
      expect(Ethnicity.getTableName()).to.eql('ethnicity');
    });

    ['id', 'ethnicity', 'subethnicity', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
