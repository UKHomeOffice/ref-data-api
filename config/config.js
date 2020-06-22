const config = require('../app/config/core');

const { dbConnectionString: url } = config;
const dialect = 'postgres';

module.exports = {
  development: {
    url,
    dialect,
  },
  test: {
    url,
    dialect,
  },
  production: {
    url,
    dialect,
  },
};
