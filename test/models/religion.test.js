const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { Religion } = require('../../models/religion');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a Religion model', () => {
  describe('when it is initialised', () => {
    before(() => {
      Religion.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new Religion();
    });
    it('should have the correct tableName', () => {
      expect(Religion.getTableName()).to.eql('religion');
    });

    ['id', 'name', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
