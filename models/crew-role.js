const { Model } = require('sequelize');

class CrewRole extends Model {
  static init(sequelize, DataTypes) {
    return Model.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      description: { type: DataTypes.STRING(60) },
      validfrom: { type: DataTypes.DATE },
      vlaidto: { type: DataTypes.DATE },
    },
    {
      sequelize,
      tableName: 'crewrole',
    });
  }
}

const schemaComments = {
  table: '{"label": "Crew role", "description": "Crew position and role description.", "schemalastupdated": "04/06/2020", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Unique identifying column.", "summaryview": "false"}',
    name: '{"label": "Name", "description": "The name of the crew position.", "summaryview": "true"}',
    description: '{"label": "Description", "description": "A Description of the role.", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { CrewRole, schemaComments };
