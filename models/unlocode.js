const Sequelize = require('sequelize');

class UNLOCODE extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
          unique: true,
        },
        iso31661alpha2: { type: DataTypes.STRING(2) },
        geolong: {
          type: DataTypes.NUMBER,
          allowNull: false,
        },
        geolat: {
          type: DataTypes.NUMBER,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING(80),
          allowNull: false,
        },
        namewodiacritics: {
          type: DataTypes.STRING(80),
          allowNull: false,
        },
        iata: { type: DataTypes.STRING(3) },
        locode: {
          type: DataTypes.STRING(3),
          allowNull: false,
        },
        seaport: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        railterminal: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        airport: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        postexchange: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        multimodal: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        fixedtransport: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        bordercrossing: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        subdivision: { type: DataTypes.STRING(3) },
        roadterminal: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        countryid: {
          type: DataTypes.INTEGER,
          references: { model: 'country', key: 'id' },
        },
        validfrom: { type: DataTypes.DATE },
        validto: { type: DataTypes.DATE },
      },
      {
        sequelize,
        tableName: 'unlocode',
      },
    );
  }

  static associate({ Country }) {
    super.belongsTo(Country, { foreignKey: 'countryid' });
  }
}

const schemaComments = {
  table:
    '{"label": "United Nations location code", "description": "The United Nations location code list as defined in the ISO 3166-1 Standard.", "schemalastupdated": "06/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Unique identifying column.", "summaryview": "false"}',
    name: '{"label": "Name", "description": "Location name", "summaryview": "true"}',
    geolat: '{"label": "Latitude", "description": "Geographic latitude", "summaryview": "false"}',
    geolong: '{"label": "Longitude", "description": "Geographic longitude", "summaryview": "false"}',
    namewodiacritics:
      '{"label": "Name with diacritics", "description": "Location name including diacritics.", "summaryview": "false"}',
    iata: '{"label": "IATA", "description": "IATA code", "summaryview": "false"}',
    locode: '{"label": "Locode", "description": "Location code", "summaryview": "false"}',
    seaport: '{"label": "Sea port", "description": "Is this a sea port?", "summaryview": "false"}',
    railterminal: '{"label": "Rail terminal", "description": "Is this a rail terminal?", "summaryview": "false"}',
    airport: '{"label": "Airport", "description": "Is this an airport?", "summaryview": "false"}',
    postexchange: '{"label": "Post exchanget", "description": "Is this a postal exchange?", "summaryview": "false"}',
    multimodal: '{"label": "Multi modal", "description": "Is this location multi modal?", "summaryview": "false"}',
    fixedtransport:
      '{"label": "Fixed transport", "description": "Is this location a fixed transport point?", "summaryview": "false"}',
    bordercrossing:
      '{"label": "Border crossing", "description": "Is this location a border crossing point?", "summaryview": "false"}',
    subdivision: '{"label": "County", "description": "Area of port", "summaryview": "false", "aliases": "region"}',
    roadterminal: '{"label": "Road terminal", "description": "Is this a road terminal?", "summaryview": "false"}',
    countryid:
      '{"label": "Linked country id", "description": "Country link to Country dataset.", "summaryview": "false"}',
    iso31661alpha2:
      '{"label": "2 digit alpha code", "description": "The countries 2 Character alpha code.", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { UNLOCODE, schemaComments };
