const { Model } = require('sequelize');

class Directorate extends Model {
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
      departmentid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'department', key: 'id' },
      },
      code: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
      validfrom: { type: DataTypes.DATE },
      validto: { type: DataTypes.DATE },
    },
    {
      sequelize,
      tableName: 'directorate',
    });
  }

  static associate({ Department }) {
    Directorate.belongsTo(Department, { foreignKey: 'departmentid' });
  }
}

const schemaComments = {
  table: '{"label": "Directorate names", "description": "The names of the departmental directorate.", "schemalastupdated": "06/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
    name: '{"label": "Name", "description": "The name of the directorate.", "summaryview": "true"}',
    departmentid: '{"label": "Department ID", "description": "Link to department entity.", "summaryview": "false"}',
    code: '{"label": "Code", "description": "The code associated with the directorate.", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { Directorate, schemaComments };
