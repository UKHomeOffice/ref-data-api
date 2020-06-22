const { Model } = require('sequelize');

class Unit extends Model {
  static init(sequelize, DataTypes) {
    return Model.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      unit: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      validfrom: { type: DataTypes.DATE },
      validto: { type: DataTypes.DATE },
    },
    {
      sequelize,
      tableName: 'unit',
    });
  }
}

const schemaComments = {
  table: '{"label": "Units of Measure", "description": "A list of units of measure - level 1", "schemalastupdated": "15/07/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
    unit: '{"label": "Unit", "description": "Type of unit", "summaryview": "false"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { Unit, schemaComments };
