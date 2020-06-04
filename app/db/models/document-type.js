const { Model } = require('sequelize');

class DocumentType extends Model {
  static init(sequelize, DataTypes){
    return Model.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      code: {
        type: DataTypes.STRING(2),
        allowNull: false
      },
      shortdescription: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      longdescription: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      validfrom: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      validto: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      }
    },
    {
      sequelize, 
      tableName: 'documenttype'
    }
    );
  }
}

const schemaComments = {
  table: '{"label": "Identity document type", "description": "A list of identification document types.", "schemalastupdated": "06/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Unique identifying column.", "summaryview": "false"}',
    code: '{"label": "Code", "description": "System codes associated with the document.", "summaryview": "true"}',
    shortdescription: '{"label": "Short description", "description": "Short description of the document.", "summaryview": "true"}',
    longdescription: '{"label": "Long description", "description": "Long description of the document.", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}'
  }
}

module.exports = { DocumentType, schemaComments }