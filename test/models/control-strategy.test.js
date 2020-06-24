const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { ControlStrategy } = require('../../models/control-strategy');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a ControlStrategy model', () => {
  describe('when it is initialised', () => {
    before(() => {
      ControlStrategy.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new ControlStrategy();
    });
    it('should have the correct tableName', () => {
      expect(ControlStrategy.getTableName()).to.eql('controlstrategy');
    });

    ['id', 'strategy', 'priority', 'code', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
