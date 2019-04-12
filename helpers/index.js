const stripStringAfterChar = (str, char) => str.substring(0, str.indexOf(char) + 1);

const jsonify = str => JSON.parse(str);

module.exports = { jsonify, stripStringAfterChar };
