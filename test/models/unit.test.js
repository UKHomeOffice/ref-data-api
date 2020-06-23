const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { Unit } = require('../../models/unit');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a Unit model', () => {
  describe('when it is initialised', () => {
    before(() => {
      Unit.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new Unit();
    });
    it('should have the correct tableName', () => {
      expect(Unit.getTableName()).to.eql('unit');
    });

    ['id', 'unit', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
