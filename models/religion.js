const { Model } = require('sequelize');

class Religion extends Model {
  static init(sequelize, DataTypes) {
    return Model.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      validfrom: { type: DataTypes.DATE },
      validto: { type: DataTypes.DATE },
    },
    {
      sequelize,
      tableName: 'religion',
    });
  }
}

const schemaComments = {
  table: '{"label": "Religion", "description": "A list of religious affiliations.", "schemalastupdated": "10/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
    name: '{"label": "Name", "description": "The name of the religion.", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { Religion, schemaComments };
