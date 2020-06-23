const Sequelize = require('sequelize');

class BFFunctionTypes extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false,
        },
        bffunction: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        validfrom: { type: DataTypes.DATE },
        validto: { type: DataTypes.DATE },
      },
      {
        sequelize,
        tableName: 'bffunctiontypes',
      },
    );
  }
}

const schemaComments = {
  table: '{"label": "Border function types", "description": "Border functions type clarifications.", "schemalastupdated": "06/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
    bffunction: '{"label": "Function", "description": "The type of border crossing.", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { BFFunctionTypes, schemaComments };
