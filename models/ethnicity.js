const { Model } = require('sequelize');

class Ethnicity extends Model {
  static init(sequelize, DataTypes) {
    return Model.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      ethnicity: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      subethnicity: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      validfrom: { type: DataTypes.DATE },
      validto: { type: DataTypes.DATE },
    },
    {
      sequelize,
      tableName: 'ethnicity',
    });
  }
}

const schemaComments = {
  table: '{"label": "Ethnicity", "description": "A list of ethnicities and subethnicities.", "schemalastupdated": "10/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
    ethnicity: '{"label": "Ethnicity", "description": "The ethnicities high level descriptor.", "summaryview": "true"}',
    subethnicity: '{"label": "Sub Ethnicity", "description": "The ethnicities low level descriptor.", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { Ethnicity, schemaComments };
