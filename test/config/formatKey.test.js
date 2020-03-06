const sinon = require('sinon');
const { expect } = require('chai');

const formatKey = require('../../app/config/formatKey');

const expectedResult = `-----BEGIN PUBLIC KEY-----
sadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafds
adfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsa
dfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsad
fjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsahappyhappyhappydfjsa
fdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsaf
dsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafd
sadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafds
adfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsa
dfjsafdsadfjsafdsadfjsafdsadfjsafd
-----END PUBLIC KEY-----`;
const someKey = 'sadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsahappyhappyhappydfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafdsadfjsafd';

describe('formatKey', () => {
  describe('when it is called', () => {
    describe('and there is a key', () => {
      it('should convert the key to the expected result', () => {
        const result = formatKey(someKey);

        sinon.assert.match(result, expectedResult);
      });
    });

    describe('and there is NOT a key', () => {
      it('should throw an error', () => {
        expect(() => formatKey()).to.throw('Key needs to be defined before you format it');
      });
    });
  });
});
