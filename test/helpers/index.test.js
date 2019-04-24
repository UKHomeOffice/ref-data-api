const expect = require('chai').expect;
const Chance = require('chance');

// local imports
const { extractToken } = require('../../helpers');

describe('Test Helper Functions', () => {
  const token = new Chance().hash();

  it('Should extract the token from the string', () => {
    const authorizationString = `Bearer ${token}`;
    const result = extractToken(authorizationString);

    expect(result).to.equal(token);
  });
});
