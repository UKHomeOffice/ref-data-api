const sinon = require('sinon');

const containsSQLMiddleware = require('../../../app/routes/middlewares/contains-sql');

describe('Test containsSQLMiddleware', () => {
  describe('when it is called', () => {
    describe('and the originalUrl contains SQL', () => {
      it('should NOT call next and should return Unauthorized message', () => {
        const json = sinon.spy();
        const originalUrl = 'http://localhost:8080/v2/roles?filter=name=eq.Manager\'--SELECT%20some,%20fields';
        const request = { originalUrl };
        const status = sinon.stub().returns({ json });
        const response = { status, locals: { user: null } };
        const next = sinon.spy();

        containsSQLMiddleware(request, response, next);

        sinon.assert.calledWith(status, 403);
        sinon.assert.calledWith(json, { error: 'Unauthorized' });
        sinon.assert.notCalled(next);
      });
    });

    describe('and the originalUrl does NOT contain SQL', () => {
      it('should call next and NOT return Unauthorized message', () => {
        const json = sinon.spy();
        const originalUrl = 'http://localhost/my/cool/url/has?no=sql';
        const request = { originalUrl };
        const status = sinon.stub().returns({ json });
        const response = { status, locals: { user: null } };
        const next = sinon.spy();

        containsSQLMiddleware(request, response, next);

        sinon.assert.notCalled(status);
        sinon.assert.notCalled(json);
        sinon.assert.calledWith(next);
      });
    });

    describe('and the originalUrl is null', () => {
      it('should call next and NOT return Unauthorized message', () => {
        const json = sinon.spy();
        const originalUrl = null;
        const request = { originalUrl };
        const status = sinon.stub().returns({ json });
        const response = { status, locals: { user: null } };
        const next = sinon.spy();

        containsSQLMiddleware(request, response, next);

        sinon.assert.notCalled(status);
        sinon.assert.notCalled(json);
        sinon.assert.calledWith(next);
      });
    });

    describe('and the originalUrl is undefined', () => {
      it('should call next and NOT return Unauthorized message', () => {
        const json = sinon.spy();
        const originalUrl = undefined;
        const request = { originalUrl };
        const status = sinon.stub().returns({ json });
        const response = { status, locals: { user: null } };
        const next = sinon.spy();

        containsSQLMiddleware(request, response, next);

        sinon.assert.notCalled(status);
        sinon.assert.notCalled(json);
        sinon.assert.calledWith(next);
      });
    });
  });
});
