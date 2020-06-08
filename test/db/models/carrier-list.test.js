const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { CarrierList } = require('../../../app/db/models/carrier-list');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a CarrierList model', () => {
  describe('when it is initialised', () => {
    before(() => {
      CarrierList.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.carrierList = new CarrierList();
    });
    it('should have the correct tableName', () => {
      expect(CarrierList.getTableName()).to.eql('carrierlist');
    });

    ['id', 'name', 'twolettercode', 'threelettercode', 'designator', 'alliance',
      'aviation', 'sea', 'land', 'rail', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.carrierList).to.have.property(column);
      });
    });
  });
});
