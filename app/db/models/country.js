const { Model } = require("sequelize");

class Country extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          comment:
            '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
        },
        iso31661alpha2: {
          type: DataTypes.STRING(2),
          allowNull: false,
          comment:
            '{"label": "2 digit alpha code", "description": "The country/territory/geographic areas 2 character alpha code.", "summaryview": "true"}',
        },
        iso31661alpha3: {
          type: DataTypes.STRING(3),
          allowNull: false,
          comment:
            '{"label": "3 digit alpha code", "description": "The country/territory/geographic areas 3 character alpha code.", "summaryview": "true"}',
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
          comment:
            '{"label": "Country name", "description": "The name of the country, territory or geographic area.", "summaryview": "true"}',
        },
        continent: {
          type: DataTypes.STRING(2),
          allowNull: false,
          comment:
            '{"label": "Continent", "description": "The continent the country/territory/geographic areas is part of.", "summaryview": "true"}',
        },
        dial: {
          type: DataTypes.STRING(20),
          comment:
            '{"label": "Phone dial code", "description": "The country/territory/geographic areas dialing prefix.", "summaryview": "true"}',
        },
        iso31661numeric: {
          type: DataTypes.INTEGER,
          allowNull: false,
          comment:
            '{"label": "3 digit numeric code", "description": "The country/territory/geographic areas numeric ISO code.", "summaryview": "true"}',
        },
        wicucode: {
          type: DataTypes.INTEGER,
          allowNull: false,
          comment:
            '{"label": "WICU code", "description": "WICU code of the country/territory/geographic area.", "summaryview": "false"}',
        },
        unm49code: {
          type: DataTypes.INTEGER,
          allowNull: false,
          comment:
            '{"label": "UN M49 code", "description": "UN M49 code of the country/territory/geographic area.", "summaryview": "false"}',
        },
        sovereignfcorecognisedstate: {
          type: DataTypes.BOOLEAN,
          comment:
            '{"label": "Soverign State", "description": "Is this state recognised by the Foreign and Commonwealth Office as Sovereign.", "summaryview": "false"}',
        },
        linkedcountryiso3code: {
          type: DataTypes.STRING(3),
          comment:
            '{"label": "Linked Country", "description": "If the state is not recognised by the Foreign and Commonwealth Office as Sovereign, then this Country handles its International Relations.", "summaryview": "TRUE"}',
        },
        relationshipwithlinkedcountry: {
          type: DataTypes.STRING(90),
          comment:
            '{"label": "Relationship with linked Country", "description": "Relationship with another country, if there is one.", "summaryview": "TRUE"}',
        },
        fullname: {
          type: DataTypes.STRING(90),
          comment:
            '{"label": "Full Name", "description": "The full name of the country/territory/geographic area.", "summaryview": "false"}',
        },
        un: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          comment:
            '{"label": "United Nations membership", "description": "Is this country/territory/geographic area a member of the United Nations.", "summaryview": "false"}',
        },
        nato: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          comment:
            '{"label": "NATO membership", "description": "Is this country/territory/geographic area a member of the North Atlantic Treaty Organisation.", "summaryview": "false"}',
        },
        interpolcode: {
          type: DataTypes.INTEGER,
          comment:
            '{"label": "Interpol Code", "description": "The Interpol code of the country/territory/geographic area.", "summaryview": "false"}',
        },
        visaregime: {
          type: DataTypes.STRING(10),
          comment:
            '{"label": "Visa Regime", "description": "The Visa regime of the country/territory/geographic area.", "summaryview": "false"}',
        },
        commonwealth: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          comment:
            '{"label": "Commonwealth membership", "description": "Is this country/territory/geographic area a member of the Commonwealth.", "summaryview": "false"}',
        },
        eu: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          comment:
            '{"label": "EU membership", "description": "Is this country/territory/geographic area a member of the European Union.", "summaryview": "false"}',
        },
        eaa: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          comment:
            '{"label": "EEA membership", "description": "Is this country/territory/geographic area a member of the European Ecconomic Area.", "summaryview": "false"}',
        },
        euoutermost: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          comment:
            '{"label": "EU Outermost Regions", "description": "Is this country/territory/geographic area one of the European Unions Outermost Regions.", "summaryview": "false"}',
        },
        euoverseasassociation: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          comment:
            '{"label": "EU Overseas Association", "description": "Is this country/territory/geographic area a member of the EUs OVerseas Association.", "summaryview": "false"}',
        },
        validfrom: {
          type: DataTypes.DATE,
          comment:
            '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
        },
        validto: {
          type: DataTypes.DATE,
          comment:
            '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
        },
      },
      { sequelize, tableName: "country" }
    );
  }

  static associate(models) {
    models.Country.hasOne(models.Nationality);
  }
}

const schemaComments = {
  table:
    '{"label": "Countries", "description": "A list of territories, geographic areas and countries recognised by the Foreign and Commonwealth Office.", "schemalastupdated": "17/12/2019", "dataversion": 1}',
  columns: {
    id:
      '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
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
    eaa:
      '{"label": "EEA membership", "description": "Is this country/territory/geographic area a member of the European Ecconomic Area.", "summaryview": "false"}',
    euoutermost:
      '{"label": "EU Outermost Regions", "description": "Is this country/territory/geographic area one of the European Unions Outermost Regions.", "summaryview": "false"}',
    euoverseasassociation:
      '{"label": "EU Overseas Association", "description": "Is this country/territory/geographic area a member of the EUs OVerseas Association.", "summaryview": "false"}',
    validfrom:
      '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto:
      '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { Country, schemaComments };
