const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class DocumentType extends Model {}

DocumentType.init({

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '{"label": "Identifier", "description": "Unique identifying column.", "summaryview": "false"}'
    },
    code: {
      type: DataTypes.STRING(2),
      allowNull: false,
      comment: '{"label": "Code", "description": "System codes associated with the document.", "summaryview": "true"}'
    },
    shortdescription: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '{"label": "Short description", "description": "Short description of the document.", "summaryview": "true"}'
    },
    longdescription: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '{"label": "Long description", "description": "Long description of the document.", "summaryview": "true"}'
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