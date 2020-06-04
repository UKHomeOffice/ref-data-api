const Sequelize = require('sequelize');

class EventType extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        type: { type: DataTypes.STRING(50) },
        useofforce: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        validfrom: { type: DataTypes.DATE },
        validto: { type: DataTypes.DATE },
      },
      { sequelize, tableName: 'eventtype' },
    );
  }
}

const schemaComments = {
  table:
    '{"label": "Event types", "description": "A list containing defferent event types.", "schemalastupdated": "06/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Unique identifying column.", "summaryview": "false"}',
    type:
      '{"label": "Event types", "description": "Descriptions of the different event types.", "summaryview": "true"}',
    useofforce: '{"label": "Use of Force", "description": "Is event valid for use of force?.", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { EventType, schemaComments };
