const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class CarrierList extends Model {}

CarrierList.init({

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '{"label": "Identifier", "description": "Unique identifying column.", "summaryview": "false"}'
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      comment: '{"label": "Carrier name", "description": "The name of the carrier.", "summaryview": "true"}'
    },
    twolettercode: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: '{"label": "Two letter code", "description": "The 2 letter carrier code.", "summaryview": "true"}'
    },
    threelettercode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: '{"label": "Three letter code", "description": "The 3 letter carrier code.", "summaryview": "true"}'
    },
    designator: {
      type: DataTypes.INT(4),
      allowNull: true,
      comment: '{"label": "Airline designator", "description": "The airline designator code.", "summaryview": "true"}'
    },
    alliance: {
      type: DataTypes.STRING(60),
      allowNull: true,
      comment: '{"label": "Alliance code", "description": "The alliance partnership code.", "summaryview": "true"}'
    },
    aviation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: '{"label": "Aviation", "description": "Aviation carrier?", "summaryview": "true"}'
    },
    sea: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: '{"label": "Sea", "description": "Maritime carrier?", "summaryview": "true"}'
    },
    land: {
      types: DataTypes.BOOLEAN,
      allowNull: false,
      comment: '{"label": "Land", "description": "Land carrier?", "summaryview": "true"}'
    },
    rail: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: '{"label": "Rail", "description": "Rail carrier?", "summaryview": "true"}'
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
    TableName: "carrierlist",
    index: [{ unique: true, fields: ['id']}]
  }
);