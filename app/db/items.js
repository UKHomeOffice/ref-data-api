// local imports
const logger = require('../config/logger')(__filename);
const config = require('../config/core');
const { getPool } = require('./index');

const getItemData = (role, tableName, objId) => new Promise((resolve, reject) => {
  const pool = getPool(role);
  const query = {
    text: `SELECT * FROM ${tableName} WHERE id=$1;`,
    values: [objId],
  };

  pool.query(query)
    .then(data => resolve(data.rows[0]))
    .catch((error) => {
      const errorMsg = `Unable to retrieve data from table ${tableName} row id ${objId}`;
      logger.error(errorMsg);
      logger.error(error.stack);
      reject(new Error(errorMsg));
    });
});

module.exports = { getItemData };
