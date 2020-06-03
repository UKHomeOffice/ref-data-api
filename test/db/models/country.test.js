const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { Country } = require('../../../app/db/models/country');

describe('Given the Country model', () => {
  let sequelize;

  before(() => {
    sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });
  });

  describe('when initialized', () => {
    before(() => {
      Country.init(sequelize, DataTypes);
    });

    it('should have the correct table name', () => {
      expect(Country.getTableName()).to.eql('country');
    });
  });
});
