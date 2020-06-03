const { Model } = require('sequelize');

class Nationality extends Model {
  static init(sequelize, DataTypes) {
    return Model.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        nationality: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        description: { type: DataTypes.STRING(350) },
        iso31661alpha3: { type: DataTypes.STRING(3) },
        iso31661alpha2: { type: DataTypes.STRING(2) },
        visarequired: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        evwoptional: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        diplomaticexception: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        specialexception: {
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
        tableName: 'nationality',
      },
    );
  }

  static associate({ Country }) {
    Nationality.belongsTo(Country, { foreignKey: 'countryid' });
  }
}

const schemaComments = {
  table:
    '{"label": "Nationalities", "description": "A list of global nationalities.", "schemalastupdated": "10/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Database unique identity record.", "summaryview": "false"}',
    nationality: '{"label": "Nationality", "description": "The name of the nationality.", "summaryview": "true"}',
    description: '{"label": "Description", "description": "Descriptions nationality.", "summaryview": "true"}',
    iso31661alpha3:
      '{"label": "3 digit alpha code", "description": "The countries 3 Character alpha code.", "summaryview": "true"}',
    iso31661alpha2:
      '{"label": "2 digit alpha code", "description": "The countries 2 Character alpha code.", "summaryview": "true"}',
    visarequired: '{"label": "Visa required", "description": "Is VISA required to visit UK?", "summaryview": "false"}',
    evwoptional:
      '{"label": "Optional - EVW", "description": "Is Electronic Visa Waver optional to visit UK?", "summaryview": "false"}',
    diplomaticexception:
      '{"label": "Exception - Diplomatic", "description": "Are there diplomatic exceptions for visiting the UK?", "summaryview": "false"}',
    specialexception:
      '{"label": "Exception - Special", "description": "Are there special exceptions for visiting the UK?", "summaryview": "false"}',
    countryid:
      '{"label": "Linked country id", "description": "The countries link to the Country dataset.", "summaryview": "false"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { Nationality, schemaComments };
