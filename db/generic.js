// local imports
const logger = require('../config/logger');
const pool = require('./index');

const setRole = (async roleName => new Promise((resolve, reject) => {
  pool.query(`SET ROLE ${roleName};`)
    .then(() => {
      resolve();
    })
    .catch((error) => {
      reject(error);
    });
}));

module.exports = setRole;
