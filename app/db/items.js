const moment = require('moment');
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
      const errorMessage = `Unable to retrieve data from table ${tableName} row id ${objId}`;

      logger.error(errorMessage, {
        stack: error.stack,
        timestamp: moment().utc().format('D/MMM/YYYY:HH:mm:ss ZZ'),
      });

      reject(new Error(errorMessage));
    });
});

module.exports = { getItemData };
