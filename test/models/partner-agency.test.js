const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { PartnerAgency } = require('../../models/partner-agency');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given an PartnerAgency model', () => {
  describe('when it is initialised', () => {
    before(() => {
      PartnerAgency.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.partnerAgency = new PartnerAgency();
    });
    it('should have the correct tableName', () => {
      expect(PartnerAgency.getTableName()).to.eql('partneragency');
    });

    [
      'id',
      'name',
      'abbreviatedname',
      'seizure',
      'intelligence',
      'disclosure',
      'referralfrom',
      'referralto',
      'validfrom',
      'validto',
    ].forEach((column) => {
      it(`should have the ${column} column`, () => {
        expect(this.partnerAgency).to.have.property(column);
      });
    });
  });
});
