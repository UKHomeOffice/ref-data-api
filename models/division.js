const { Model } = require('sequelize');

class Division extends Model {
  static init(sequelize, DataTypes) {
    return Model.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      branchid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'branch', key: 'id' },
      },
      validfrom: { type: DataTypes.DATE },
      validto: { type: DataTypes.DATE },
    },
    {
      sequelize,
      tableName: 'division',
    });
  }

  static associate({ Branch }) {
    Division.belongsTo(Branch, { foreignKey: 'branchid' });
  }
}

const schemaComments = {
  table: '{"label": "Divisions", "description": "A list of border force divisions and their associated codes.", "schemalastupdated": "06/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
    name: '{"label": "Name", "description": "The division name.", "summaryview": "true"}',
    branchid: '{"label": "Branch / Region ID", "description": "Link to branch entity.", "summaryview": "false"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { Division, schemaComments };
