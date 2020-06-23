const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { ActivityType } = require('../../models/activity-type');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given an ActivityType model', () => {
  describe('when it is initialised', () => {
    before(() => {
      ActivityType.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new ActivityType();
    });
    it('should have the correct tableName', () => {
      expect(ActivityType.getTableName()).to.eql('activitytype');
    });

    ['id', 'type', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
