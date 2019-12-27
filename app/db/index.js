const { Pool } = require('pg');

// local imports
const logger = require('../config/logger')(__filename);
const config = require('../config/core');

const pool = new Pool({
  'connectionString': config.dbConnectionString,
});

pool.on('connect', (client) => {
  logger.debug('New database connection established');
  client.query(`SET search_path TO "${config.dbSchema}";`);
});

pool.on('error', (err, client) => {
  logger.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
