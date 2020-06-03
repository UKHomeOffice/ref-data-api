const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class DogRole extends Model {}

DogRole.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '{"label": "Identifier", "description": "Unique identifying column.", "summaryview": "false"}'
  },
  code: {
    type: DataTypes.STRING(2),
    allowNull: false,
    comment: '{"label": "Code", "description": "A list of codes associated with the dog role.", "summaryview": "true"}'
  },
  description: {
    type: DataTypes.STRING(60),
    allowNull: true,
    comment: '{"label": "Short description", "description": "A description of the dog role.", "summaryview": "true"}'
  },
  validfrom: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    comment: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}'
  },
  validto: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    comment: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}'
  }
},
{
  sequelize,
  TableName: 'documenttype',
  index: [{ unique: true, fields: ['id']}]
}
);