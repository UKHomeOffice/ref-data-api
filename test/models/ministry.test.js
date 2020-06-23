const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { Ministry } = require('../../models/ministry');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a Ministry model', () => {
  describe('when it is initialised', () => {
    before(() => {
      Ministry.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new Ministry();
    });
    it('should have the correct tableName', () => {
      expect(Ministry.getTableName()).to.eql('ministry');
    });

    ['id', 'name', 'code', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
