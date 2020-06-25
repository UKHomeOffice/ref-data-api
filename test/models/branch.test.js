const { expect } = require('chai');
const sinon = require('sinon');
const { Sequelize, DataTypes } = require('sequelize');

const { Branch } = require('../../models/branch');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a Branch model', () => {
  describe('when it is initialised', () => {
    before(() => {
      Branch.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new Branch();
    });
    it('should have the correct tableName', () => {
      expect(Branch.getTableName()).to.eql('branch');
    });

    ['id', 'name', 'directorateid', 'code', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });

    describe('associations', () => {
      class Directorate extends Sequelize.Model {}

      before(() => {
        sinon.spy(Branch, 'belongsTo');

        Branch.associate({ Directorate });
      });

      it('should define a `belongsTo` association with Directorate', () => {
        expect(Branch.belongsTo.calledWith(Directorate)).to.be.ok;
      });
    });
  });
});
