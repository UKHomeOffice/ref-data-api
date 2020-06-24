const { expect } = require('chai');
const sinon = require('sinon');
const { Sequelize, DataTypes } = require('sequelize');

const { Division } = require('../../models/division');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a Division model', () => {
  describe('when it is initialised', () => {
    before(() => {
      Division.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new Division();
    });
    it('should have the correct tableName', () => {
      expect(Division.getTableName()).to.eql('division');
    });

    ['id', 'name', 'branchid', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });

    describe('associations', () => {
      class Branch extends Sequelize.Model {}

      before(() => {
        sinon.spy(Division, 'belongsTo');

        Division.associate({ Branch });
      });

      it('should define a `belongsTo` association with Branch', () => {
        expect(Division.belongsTo.calledWith(Branch)).to.be.ok;
      });
    });
  });
});
