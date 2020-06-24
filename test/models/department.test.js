const { expect } = require('chai');
const sinon = require('sinon');
const { Sequelize, DataTypes } = require('sequelize');

const { Department } = require('../../models/department');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a Department model', () => {
  describe('when it is initialised', () => {
    before(() => {
      Department.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new Department();
    });
    it('should have the correct tableName', () => {
      expect(Department.getTableName()).to.eql('department');
    });

    ['id', 'name', 'ministryid', 'code', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });

    describe('associations', () => {
      class Ministry extends Sequelize.Model {}

      before(() => {
        sinon.spy(Department, 'belongsTo');

        Department.associate({ Ministry });
      });

      it('should define a `belongsTo` association with Ministry', () => {
        expect(Department.belongsTo.calledWith(Ministry)).to.be.ok;
      });
    });
  });
});
