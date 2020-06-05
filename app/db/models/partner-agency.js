const Sequelize = require('sequelize');

class PartnerAgency extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        name: { type: DataTypes.STRING(60) },
        abbreviatedname: { type: DataTypes.STRING(50) },
        seizure: { type: DataTypes.BOOLEAN, allowNull: false },
        intelligence: { type: DataTypes.BOOLEAN, allowNull: false },
        disclosure: { type: DataTypes.BOOLEAN, allowNull: false },
        referralfrom: { type: DataTypes.BOOLEAN, allowNull: false },
        referralto: { type: DataTypes.BOOLEAN, allowNull: false },
        validfrom: { type: DataTypes.DATE },
        validto: { type: DataTypes.DATE },
      },
      { sequelize, tableName: 'partneragency' },
    );
  }
}

const schemaComments = {
  table:
    '{"label": "Partner agencies", "description": "A list of partner agencies and associated permissions.", "schemalastupdated": "06/03/2019", "dataversion": 1}',
  columns: {
    id: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "falßse"}',
    name: '{"label": "Name", "description": "Partner agency name", "summaryview": "true"}',
    abbreviatedname:
      '{"label": "Abbreviated name", "description": "Short name of the partner agency.", "summaryview": "true"}',
    seizure: '{"label": "Seizure", "description": "Valid seizure partner.", "summaryview": "true"}',
    intelligence: '{"label": "Intelligence", "description": "Valid intelligence partner.", "summaryview": "true"}',
    disclosure: '{"label": "Disclosure", "description": "Valid disclosure partner.", "summaryview": "true"}',
    referralfrom:
      '{"label": "Referral from", "description": "Partner allowed to make referrals.", "summaryview": "true"}',
    referralto:
      '{"label": "Referral to", "description": "Partner allowed to receive referrals.", "summaryview": "true"}',
    validfrom: '{"label": "Valid from date", "description": "Item valid from date.", "summaryview" : "false"}',
    validto: '{"label": "Valid to date", "description": "Item valid to date.", "summaryview" : "false"}',
  },
};

module.exports = { PartnerAgency, schemaComments };
