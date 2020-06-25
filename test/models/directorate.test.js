const { expect } = require('chai');
const sinon = require('sinon');
const { Sequelize, DataTypes } = require('sequelize');

const { Directorate } = require('../../models/directorate');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a Directorate model', () => {
  describe('when it is initialised', () => {
    before(() => {
      Directorate.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new Directorate();
    });
    it('should have the correct tableName', () => {
      expect(Directorate.getTableName()).to.eql('directorate');
    });

    ['id', 'name', 'departmentid', 'code', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });

    describe('associations', () => {
      class Department extends Sequelize.Model {}

      before(() => {
        sinon.spy(Directorate, 'belongsTo');

        Directorate.associate({ Department });
      });

      it('should define a `belongsTo` association with Department', () => {
        expect(Directorate.belongsTo.calledWith(Department)).to.be.ok;
      });
    });
  });
});
