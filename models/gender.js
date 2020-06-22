const { Model } = require('sequelize');

class Gender extends Model {
  static init(sequelize, DataTypes) {
    return Model.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      validfrom: { type: DataTypes.DATE },
      validto: { type: DataTypes.DATE },
    },
    {
      sequelize,
      tableName: 'gender',
    });
  }
}

const schemaComments = {
  table: '{"label": "Gender", "description": "A list of current groups on the gender spectrum.", "schemalastupdated": "06/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
    gender: '{"label": "Gender", "description": "The name of the gender.", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { Gender, schemaComments };
