const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { Marital } = require('../../models/marital');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a Marital model', () => {
  describe('when it is initialised', () => {
    before(() => {
      Marital.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new Marital();
    });
    it('should have the correct tableName', () => {
      expect(Marital.getTableName()).to.eql('marital');
    });

    ['id', 'code', 'description', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
