const { Model } = require('sequelize');

class Country extends Model {
  static init(sequelize, DataTypes) {
    return Model.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        iso31661alpha2: {
          type: DataTypes.STRING(2),
          allowNull: false,
        },
        iso31661alpha3: {
          type: DataTypes.STRING(3),
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        continent: {
          type: DataTypes.STRING(2),
          allowNull: false,
        },
        dial: { type: DataTypes.STRING(20) },
        iso31661numeric: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        wicucode: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        unm49code: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        sovereignfcorecognisedstate: { type: DataTypes.BOOLEAN },
        linkedcountryiso3code: { type: DataTypes.STRING(3) },
        relationshipwithlinkedcountry: { type: DataTypes.STRING(90) },
        fullname: { type: DataTypes.STRING(80) },
        un: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        nato: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        interpolcode: { type: DataTypes.INTEGER },
        visaregime: { type: DataTypes.STRING(10) },
        commonwealth: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        eu: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        eea: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        euoutermost: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        euoverseasassociation: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        validfrom: { type: DataTypes.DATE },
        validto: { type: DataTypes.DATE },
      },
      { sequelize, tableName: 'country' },
    );
  }

  static associate({ Nationality }) {
    Country.hasOne(Nationality);
  }
}

const schemaComments = {
  table:
    '{"label": "Countries", "description": "A list of territories, geographic areas and countries recognised by the Foreign and Commonwealth Office.", "schemalastupdated": "17/12/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
    iso31661alpha2:
      '{"label": "2 digit alpha code", "description": "The country/territory/geographic areas 2 character alpha code.", "summaryview": "true"}',
    iso31661alpha3:
      '{"label": "3 digit alpha code", "description": "The country/territory/geographic areas 3 character alpha code.", "summaryview": "true"}',
    name:
      '{"label": "Country name", "description": "The name of the country, territory or geographic area.", "summaryview": "true"}',
    continent:
      '{"label": "Continent", "description": "The continent the country/territory/geographic areas is part of.", "summaryview": "true"}',
    dial:
      '{"label": "Phone dial code", "description": "The country/territory/geographic areas dialing prefix.", "summaryview": "true"}',
    iso31661numeric:
      '{"label": "3 digit numeric code", "description": "The country/territory/geographic areas numeric ISO code.", "summaryview": "true"}',
    wicucode:
      '{"label": "WICU code", "description": "WICU code of the country/territory/geographic area.", "summaryview": "false"}',
    unm49code:
      '{"label": "UN M49 code", "description": "UN M49 code of the country/territory/geographic area.", "summaryview": "false"}',
    sovereignfcorecognisedstate:
      '{"label": "Soverign State", "description": "Is this state recognised by the Foreign and Commonwealth Office as Sovereign.", "summaryview": "false"}',
    linkedcountryiso3code:
      '{"label": "Linked Country", "description": "If the state is not recognised by the Foreign and Commonwealth Office as Sovereign, then this Country handles its International Relations.", "summaryview": "TRUE"}',
    relationshipwithlinkedcountry:
      '{"label": "Relationship with linked Country", "description": "Relationship with another country, if there is one.", "summaryview": "TRUE"}',
    fullname:
      '{"label": "Full Name", "description": "The full name of the country/territory/geographic area.", "summaryview": "false"}',
    un:
      '{"label": "United Nations membership", "description": "Is this country/territory/geographic area a member of the United Nations.", "summaryview": "false"}',
    nato:
      '{"label": "NATO membership", "description": "Is this country/territory/geographic area a member of the North Atlantic Treaty Organisation.", "summaryview": "false"}',
    interpolcode:
      '{"label": "Interpol Code", "description": "The Interpol code of the country/territory/geographic area.", "summaryview": "false"}',
    visaregime:
      '{"label": "Visa Regime", "description": "The Visa regime of the country/territory/geographic area.", "summaryview": "false"}',
    commonwealth:
      '{"label": "Commonwealth membership", "description": "Is this country/territory/geographic area a member of the Commonwealth.", "summaryview": "false"}',
    eu:
      '{"label": "EU membership", "description": "Is this country/territory/geographic area a member of the European Union.", "summaryview": "false"}',
    eea:
      '{"label": "EEA membership", "description": "Is this country/territory/geographic area a member of the European Ecconomic Area.", "summaryview": "false"}',
    euoutermost:
      '{"label": "EU Outermost Regions", "description": "Is this country/territory/geographic area one of the European Unions Outermost Regions.", "summaryview": "false"}',
    euoverseasassociation:
      '{"label": "EU Overseas Association", "description": "Is this country/territory/geographic area a member of the EUs OVerseas Association.", "summaryview": "false"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { Country, schemaComments };
