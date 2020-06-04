const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { UNLOCODE } = require('../../../app/db/models/unlocode');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a UNLOCODE model', () => {
  describe('when it is initialised', () => {
    before(() => {
      UNLOCODE.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.unlocode = new UNLOCODE();
    });
    it('should have the correct tableName', () => {
      expect(UNLOCODE.getTableName()).to.eql('unlocode');
    });
    it('should have the correct columns', () => {
      [
        'id',
        'iso31661alpha2',
        'geolong',
        'geolat',
        'name',
        'namewodiacritics',
        'iata',
        'locode',
        'seaport',
        'railterminal',
        'airport',
        'postexchange',
        'multimodal',
        'fixedtransport',
        'bordercrossing',
        'subdivision',
        'roadterminal',
        'countryid',
        'validfrom',
        'validto',
      ].forEach((prop) => {
        expect(this.unlocode).to.have.property(prop);
      });
    });
  });
});
