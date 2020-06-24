const { Model } = require('sequelize');

class Branch extends Model {
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
      directorateid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'directorate', key: 'id' },
      },
      code: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      validfrom: { type: DataTypes.DATE },
      validto: { type: DataTypes.DATE },
    },
    {
      sequelize,
      tableName: 'branch',
    });
  }

  static associate({ Directorate }) {
    Branch.belongsTo(Directorate, { foreignKey: 'directorateid' });
  }
}

const schemaComments = {
  table: '{"label": ""Branch/Region names, "description": "A list of different branches and regions, associated by directorate.", "schemalastupdated": "06/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
    name: '{"label": "Name", "description": "The name of the branch or region.", "summaryview": "true", "aliases": "region"}',
    directorateid: '{"label": "Directorate ID", "description": "Link to directorate entity.", "summaryview": "false"}',
    code: '{"label": "Code", "description": "The code associated with the branch or region.", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { Branch, schemaComments };
