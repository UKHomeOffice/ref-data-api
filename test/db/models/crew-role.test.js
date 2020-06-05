const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { CrewRole } = require('../../../app/db/models/crew-role');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a CrewRole model', () => {
  describe('when it is initialised', () => {
    before(() => {
      CrewRole.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.crewRole = new CrewRole();
    });
    it('should have the correct tableName', () => {
      expect(CrewRole.getTableName()).to.eql('crewrole');
    });

    ['id', 'name', 'description', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.crewRole).to.have.property(column);
      });
    });
  });
});
