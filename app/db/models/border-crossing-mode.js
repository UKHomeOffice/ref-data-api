const { Model } = require('sequelize');

class BorderCrossingMode extends Model {
  static init(sequelize, DataTypes) {
    return Model.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        border: {
          type: DataTypes.STRING(5),
          allowNull: false,
        },
        type: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        personorfreight: {
          type: DataTypes.STRING(7),
          allowNull: false,
        },
        validfrom: { type: DataTypes.DATE },
        validto: { type: DataTypes.DATE },
      },
      { sequelize, tableName: 'bordercrossingmode' },
    );
  }
}

const schemaComments = {
  table:
    '{"label": "Type of Border Crossing", "description": "Methods of crossing the border", "schemalastupdated": "06/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}',
    border: '{"label": "Border", "description": "Type of border", "summaryview": "true"}',
    type: '{"label": "Service type", "description": "Is the service commercial or general", "summaryview": "true"}',
    personorfreight:
      '{"label": "Person or Freight", "description": "Is it a person or freight crossing the border", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date", "summaryview" : "false"}',
  },
};

module.exports = { BorderCrossingMode, schemaComments };
