const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { Title } = require('../../models/title');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a Title model', () => {
  describe('when it is initialised', () => {
    before(() => {
      Title.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new Title();
    });
    it('should have the correct tableName', () => {
      expect(Title.getTableName()).to.eql('title');
    });

    ['id', 'title', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
