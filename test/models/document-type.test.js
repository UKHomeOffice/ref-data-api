const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { DocumentType } = require('../../models/document-type');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a DocumentType model', () => {
  describe('when it is initialised', () => {
    before(() => {
      DocumentType.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.documentType = new DocumentType();
    });
    it('should have the correct tableName', () => {
      expect(DocumentType.getTableName()).to.eql('documenttype');
    });

    ['id', 'code', 'shortdescription', 'longdescription', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.documentType).to.have.property(column);
      });
    });
  });
});
