const { Model } = require('sequelize');

class ControlStrategy extends Model {
  static init(sequelize, DataTypes) {
    return Model.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      strategy: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      priority: {
        type: DataTypes.STRING(1),
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      validfrom: { type: DataTypes.DATE },
      validto: { type: DataTypes.DATE },
    },
    {
      sequelize,
      tableName: 'controlstrategy',
    });
  }
}

const schemaComments = {
  table: '{"label": "Control strategy", "description": "Details of the control strategy as set by Border Force.", "schemalastupdated": "21/08/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Unique identifying column.", "summaryview": "false"}',
    strategy: '{"label": "Strategy", "description": "The strategy descriptor.", "summaryview": "true"}',
    priority: '{"label": "Priority", "description": "The priority letter assigned to the strategy.", "summaryview": "true"}',
    code: '{"label": "Code", "description": "Control Strategy Code.", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { ControlStrategy, schemaComments };
