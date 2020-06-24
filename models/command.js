const { Model } = require('sequelize');

class Command extends Model {
  static init(sequelize, DataTypes) {
    return Model.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      divisionid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'division', key: 'id' },
      },
      code: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      operationalcommand: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      validfrom: { type: DataTypes.DATE },
      validto: { type: DataTypes.DATE },
    },
    {
      sequelize,
      tableName: 'command',
    });
  }

  static associate({ Division }) {
    Command.belongsTo(Division, { foreignKey: 'divisionid' });
  }
}

const schemaComments = {
  table: '{"label": "Command list", "description": "A list of commands and their associated codes.", "schemalastupdated": "17/12/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
    unit: '{"label": "Name", "description": "The name of the command.", "summaryview": "true"}',
    code: '{"label": "Code", "description": "The code of the command.", "summaryview": "true"}',
    divisionid: '{"label": "Division ID", "description": "Link to the division entity.", "summaryview": "false"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { Command, schemaComments };
