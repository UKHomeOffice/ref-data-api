const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { Nationality } = require('../../../app/db/models/nationality');

describe('Given the Nationality model', () => {
  before(() => {
    this.sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });
  });

  describe('when initialized', () => {
    before(() => {
      Nationality.init(this.sequelize, DataTypes);
    });

    it('should have the correct table name', () => {
      expect(Nationality.getTableName()).to.eql('nationality');
    });
  });
});
