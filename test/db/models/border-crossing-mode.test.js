const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { BorderCrossingMode } = require('../../../app/db/models/border-crossing-mode');

describe('Given the BorderCrossingMode model', () => {
  const tableColumns = ['id', 'border', 'type', 'personorfreight', 'validfrom', 'validto'];

  before(() => {
    this.sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });
  });

  describe('when initialized', () => {
    before(() => {
      BorderCrossingMode.init(this.sequelize, DataTypes);
    });

    beforeEach(() => {
      this.borderCrossingMode = new BorderCrossingMode();
    });

    it('should have the correct table name', () => {
      expect(BorderCrossingMode.getTableName()).to.eql('bordercrossingmode');
    });

    tableColumns.forEach((column) => {
      it(`should have a "${column}" column`, () => {
        expect(this.borderCrossingMode).to.have.property(column);
      });
    });
  });
});
