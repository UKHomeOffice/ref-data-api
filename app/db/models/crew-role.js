const { DataTypes, Sequelize, Model } = require("sequelize");
const sequelize = new Sequelize('sqlite::memory');

class CrewRole extends Model {}

CrewRole.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      comment:'{"label": "Identifier", "description": "Unique identifying column.", "summaryview": "false"}'
    },

    name: {
      type: DataTypes.STRING(40),
      allowNul: false,
      comment: '{"label": "Name", "description": "The name of the crew position.", "summaryview": "true"}'
    },

    description: {
      type: DataTypes.STRING(60),
      allowNul: true,
      comment: '{"label": "Description", "description": "A Description of the role.", "summaryview": "true"}'
    },

    validfrom: {
      type: DataTypes.DATE,
      allowNul: true,
      comment: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}'
    }, 

    vlaidto: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}'
    }
  },
  {
    sequilize,
    TableName: 'crewrole',
    indexes: [{ unique: true, fields: ['id']}]
  }
);

