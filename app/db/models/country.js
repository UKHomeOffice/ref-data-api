const { DataTypes, Model } = require("sequelize");

class Country extends Model {}

Country.init({
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
});

module.exports = Country;
