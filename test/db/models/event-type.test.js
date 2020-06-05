const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { EventType } = require('../../../app/db/models/event-type');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given an EventType model', () => {
  describe('when it is initialised', () => {
    before(() => {
      EventType.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.eventType = new EventType();
    });
    it('should have the correct tableName', () => {
      expect(EventType.getTableName()).to.eql('eventtype');
    });

    ['id', 'type', 'useofforce', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the ${column} column`, () => {
        expect(this.eventType).to.have.property(column);
      });
    });
  });
});
