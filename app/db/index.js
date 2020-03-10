const { Pool } = require('pg');

// local imports
const logger = require('../config/logger')(__filename);
const config = require('../config/core');

const readPool = new Pool({ connectionString: config.dbConnectionString });

const writePool = new Pool({ connectionString: config.dbConnectionString });

readPool.on('connect', (client) => {
  client.query(`SET search_path TO "${config.dbSchema}";`);
  client.query(`SET ROLE ${config.dbRead}`);
});

readPool.on('error', (err, client) => {
  logger.error('Unexpected error on idle client', err);
  process.exit(-1);
});

writePool.on('connect', (client) => {
  client.query(`SET search_path TO "${config.dbSchema}";`);
  client.query(`SET ROLE ${config.dbWrite}`);
});

writePool.on('error', (err, client) => {
  logger.error('Unexpected error on idle client', err);
  process.exit(-1);
});

const getPool = (role = undefined) => {
  if (role === undefined || role === config.dbRead) {
    return readPool;
  }
  // when role allows write to db
  return writePool;
};

module.exports = {
  getPool,
  readPool,
  writePool,
};
