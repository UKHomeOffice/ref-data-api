const { expect } = require('chai');
const sinon = require('sinon');
const { Sequelize, DataTypes } = require('sequelize');

const { Command } = require('../../models/command');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a Command model', () => {
  describe('when it is initialised', () => {
    before(() => {
      Command.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new Command();
    });
    it('should have the correct tableName', () => {
      expect(Command.getTableName()).to.eql('command');
    });

    ['id', 'name', 'divisionid', 'code', 'operationalcommand', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });

    describe('associations', () => {
      class Division extends Sequelize.Model {}

      before(() => {
        sinon.spy(Command, 'belongsTo');

        Command.associate({ Division });
      });

      it('should define a `belongsTo` association with Division', () => {
        expect(Command.belongsTo.calledWith(Division)).to.be.ok;
      });
    });
  });
});
