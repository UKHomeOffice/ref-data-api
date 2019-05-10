// local imports
const logger = require('../config/logger');
const pool = require('./index');

const getEntityDescription = (async tableName => new Promise((resolve, reject) => {
  pool.query(`SELECT obj_description('${tableName}'::regclass, 'pg_class') AS description;`)
    .then((data) => {
      resolve({ 'description': JSON.parse(data.rows[0].description) });
    })
    .catch((error) => {
      logger.error(error);
      reject('Unable to get entity description');
    });
}));

const getEntitySchema = async tableName => new Promise((resolve, reject) => {
  pool.query(`SELECT column_name, is_nullable, data_type, character_maximum_length,
      col_description((table_schema||'.'||table_name)::regclass::oid, ordinal_position) AS description
      FROM information_schema.columns WHERE table_name='${tableName}';`)
    .then((data) => {
      const required = [];
      const properties = {};

      data.rows.forEach((obj) => {
        if (obj.is_nullable === 'NO') {
          required.push(obj.column_name);
        }

        properties[obj.column_name] = {
          'maxLength': obj.character_maximum_length,
          'format': obj.data_type,
          'type': obj.data_type,
          'description': JSON.parse(obj.description),
        };
      });

      resolve({ required, properties });
    })
    .catch((error) => {
      reject(error);
    });
});

const getData = async tableName => new Promise((resolve, reject) => {
  pool.query(`SELECT * FROM ${tableName};`)
    .then((data) => {
      resolve(data.rows);
    })
    .catch((error) => {
      reject(error);
    });
});

module.exports = {
  getData,
  getEntityDescription,
  getEntitySchema,
};
