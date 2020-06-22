const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { EventStatus } = require('../../../app/db/models/event-status');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a EventStatus model', () => {
  describe('when it is initialised', () => {
    before(() => {
      EventStatus.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new EventStatus();
    });
    it('should have the correct tableName', () => {
      expect(EventStatus.getTableName()).to.eql('eventstatus');
    });

    ['id', 'status', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
