const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { DogRole } = require('../../models/dog-role');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a DogRole model', () => {
  describe('when it is initialised', () => {
    before(() => {
      DogRole.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.dogRole = new DogRole();
    });
    it('should have the correct tableName', () => {
      expect(DogRole.getTableName()).to.eql('dogrole');
    });

    ['id', 'code', 'description', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.dogRole).to.have.property(column);
      });
    });
  });
});
