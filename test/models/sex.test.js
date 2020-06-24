const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { Sex } = require('../../models/sex');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a Sex model', () => {
  describe('when it is initialised', () => {
    before(() => {
      Sex.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new Sex();
    });
    it('should have the correct tableName', () => {
      expect(Sex.getTableName()).to.eql('sex');
    });

    ['id', 'name', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
