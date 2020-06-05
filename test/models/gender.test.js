const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { Gender } = require('../../models/gender');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a Gender model', () => {
  describe('when it is initialised', () => {
    before(() => {
      Gender.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new Gender();
    });
    it('should have the correct tableName', () => {
      expect(Gender.getTableName()).to.eql('gender');
    });

    ['id', 'gender', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
