const { Model } = require('sequelize');

class DogRole extends Model {
  static init(sequelize, DataTypes) {
    return Model.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING(2),
        allowNull: false,
      },
      description: { type: DataTypes.STRING(60) },
      validfrom: { type: DataTypes.DATE },
      validto: { type: DataTypes.DATE },
    },
    {
      sequelize,
      tableName: 'dogrole',
    });
  }
}

const schemaComments = {
  table: '{"label": "Dog role", "description": "A description of the role played by dog team.", "schemalastupdated": "06/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Unique identifying column.", "summaryview": "false"}',
    code: '{"label": "Code", "description": "A list of codes associated with the dog role.", "summaryview": "true"}',
    description: '{"label": "Short description", "description": "A description of the dog role.", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { DogRole, schemaComments };
