const { expect } = require('chai');
const { Sequelize, DataTypes } = require('sequelize');

const { WorkArea } = require('../../models/work-area');

const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'postgres' });

describe('Given a WorkArea model', () => {
  describe('when it is initialised', () => {
    before(() => {
      WorkArea.init(sequelize, DataTypes);
    });

    beforeEach(() => {
      this.modelInstance = new WorkArea();
    });
    it('should have the correct tableName', () => {
      expect(WorkArea.getTableName()).to.eql('workarea');
    });

    ['id', 'area', 'validfrom', 'validto'].forEach((column) => {
      it(`should have the column: ${column}`, () => {
        expect(this.modelInstance).to.have.property(column);
      });
    });
  });
});
