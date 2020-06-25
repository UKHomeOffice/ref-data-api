const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { CriminalRecordType } = require('../../models/criminal-record-type');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a CriminalRecordType model', () => {
  describe('when it is initialised', () => {
    before(() => {
      CriminalRecordType.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new CriminalRecordType();
    });
    it('should have the correct tableName', () => {
      expect(CriminalRecordType.getTableName()).to.eql('criminalrecordtype');
    });

    ['id', 'recordname', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
