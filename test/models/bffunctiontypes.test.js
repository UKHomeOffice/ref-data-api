const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { BFFunctionTypes } = require('../../models/bffunctiontypes');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a BFFunctionTypes model', () => {
  describe('when it is initialised', () => {
    before(() => {
      BFFunctionTypes.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new BFFunctionTypes();
    });
    it('should have the correct tableName', () => {
      expect(BFFunctionTypes.getTableName()).to.eql('bffunctiontypes');
    });

    ['id', 'bffunction', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
