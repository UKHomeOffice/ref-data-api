const { DataTypes, Model } = require("sequelize");
const Country = require("./country");

class Nationality extends Model {}

Nationality.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment:
        '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
    },
    nationality: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment:
        '{"label": "Nationality", "description": "The name of the nationality.", "summaryview": "true"}',
    },
    description: {
      type: DataTypes.STRING(350),
      comment:
        '{"label": "Description", "description": "Descriptions nationality.", "summaryview": "true"}',
    },
    iso31661alpha3: {
      type: DataTypes.STRING(3),
      comment:
        '{"label": "3 digit alpha code", "description": "The countries 3 Character alpha code.", "summaryview": "true"}',
    },
    iso31661alpha2: {
      type: DataTypes.STRING(2),
      comment:
        '{"label": "2 digit alpha code", "description": "The countries 2 Character alpha code.", "summaryview": "true"}',
    },
    visarequired: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment:
        '{"label": "Visa required", "description": "Is VISA required to visit UK?", "summaryview": "false"}',
    },
    evwoptional: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment:
        '{"label": "Optional - EVW", "description": "Is Electronic Visa Waver optional to visit UK?", "summaryview": "false"}',
    },
    diplomaticexception: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment:
        '{"label": "Exception - Diplomatic", "description": "Are there diplomatic exceptions for visiting the UK?", "summaryview": "false"}',
    },
    specialexception: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment:
        '{"label": "Exception - Special", "description": "Are there special exceptions for visiting the UK?", "summaryview": "false"}',
    },
    countryid: {
      type: DataTypes.INTEGER,
      references: {
        model: Country,
        key: "id",
      },
      comment:
        '{"label": "Linked country id", "description": "The countries link to the Country dataset.", "summaryview": "false"}',
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
  {
    tableName: "nationality",
    comment:
      '{"label": "Nationalities", "description": "A list of global nationalities.", "schemalastupdated": "10/03/2019", "dataversion": 1}',
  }
);

Nationality.belongsTo(Country, { foreignKey: "countryid" });

module.exports = Nationality;
