const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { EventType } = require('../../../app/db/models/event-type');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a EventType model', () => {
  describe('when it is initialised', () => {
    it('should have the correct tableName', () => {
      EventType.init(sequelize, DataTypes);

      expect(EventType.getTableName()).to.eql('eventtype');
    });
  });
});
