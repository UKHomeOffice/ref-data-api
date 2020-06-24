const { Model } = require('sequelize');

class Department extends Model {
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
      ministryid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'ministry', key: 'id' },
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
      tableName: 'department',
    });
  }

  static associate({ Ministry }) {
    Department.belongsTo(Ministry, { foreignKey: 'ministryid' });
  }
}

const schemaComments = {
  table: '{"label": "Department", "description": "A list of departments that make up the Home Office.", "schemalastupdated": "06/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
    name: '{"label": "Department name", "description": "The name of the department.", "summaryview": "true"}',
    ministryid: '{"label": "Ministry ID", "description": "Link to ministry entity.", "summaryview": "true"}',
    code: '{"label": "Department code", "description": "The code associated with the department.", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { Department, schemaComments };
