const jsonify = str => JSON.parse(str);

/**
 * extractToken() as the name says, extracts the embeded token from
 * the `authorizationString` which has the following format:
 * `Bearer asjldfjlajdfaldw8uf9w4rq2fuq9`
 */
const extractToken = authorizationString => authorizationString.split(' ')[1];

module.exports = {
  extractToken,
  jsonify,
};
