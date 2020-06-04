const { Model } = require('sequelize');

class CarrierList extends Model {
  static init(squelize, DataTypes){
    return Model.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      twolettercode: {
        type: DataTypes.STRING(2),
        allowNull: true
      },
      threelettercode: {
        type: DataTypes.STRING(3),
        allowNull: true
      },
      designator: {
        type: DataTypes.INT(4),
        allowNull: true
      },
      alliance: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      aviation: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      sea: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      land: {
        types: DataTypes.BOOLEAN,
        allowNull: false
      },
      rail: {
        type: DataTypes.BOOLEAN,
        allowNull: false
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
      tableName: 'carrierlist'
    }
    );
  }
}

const schemaComments = {
  table: '{"label": "Carriers", "description": "A list of Carriers.", "schemalastupdated": "02/06/2020", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Unique identifying column.", "summaryview": "false"}',
    name: '{"label": "Carrier name", "description": "The name of the carrier.", "summaryview": "true"}',
    twolettercode: '{"label": "Two letter code", "description": "The 2 letter carrier code.", "summaryview": "true"}',
    threelettercode: '{"label": "Three letter code", "description": "The 3 letter carrier code.", "summaryview": "true"}',
    designator: '{"label": "Airline designator", "description": "The airline designator code.", "summaryview": "true"}',
    alliance: '{"label": "Alliance code", "description": "The alliance partnership code.", "summaryview": "true"}',
    aviation: '{"label": "Aviation", "description": "Aviation carrier?", "summaryview": "true"}',
    sea: '{"label": "Sea", "description": "Maritime carrier?", "summaryview": "true"}',
    land: '{"label": "Land", "description": "Land carrier?", "summaryview": "true"}',
    rail: '{"label": "Rail", "description": "Rail carrier?", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  }
};

module.exports = { CarrierList, schemaComments };