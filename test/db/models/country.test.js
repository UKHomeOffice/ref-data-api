const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { Country } = require('../../../app/db/models/country');

describe('Given the Country model', () => {
  before(() => {
    this.sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });
  });

  describe('when initialized', () => {
    before(() => {
      Country.init(this.sequelize, DataTypes);
    });

    it('should have the correct table name', () => {
      expect(Country.getTableName()).to.eql('country');
    });
  });
});
