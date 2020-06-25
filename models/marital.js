const { Model } = require('sequelize');

class Marital extends Model {
  static init(sequelize, DataTypes) {
    return Model.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING(1),
        allowNull: false,
        unique: true,
      },
      description: { type: DataTypes.STRING(100) },
      validfrom: { type: DataTypes.DATE },
      validto: { type: DataTypes.DATE },
    },
    {
      sequelize,
      tableName: 'marital',
    });
  }
}

const schemaComments = {
  table: '{"label": "Marital status", "description": "Marital statuses.", "schemalastupdated": "10/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
    code: '{"label": "Short Code", "description": "Short code.", "summaryview": "true"}',
    description: '{"label": "Description", "description": "A description of the marital status.", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { Marital, schemaComments };
