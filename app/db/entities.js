// local imports
const logger = require('../config/logger')(__filename);
const config = require('../config/core');
const pool = require('./index');

const getEntityDescription = tableName => new Promise((resolve, reject) => {
  const query = {
    'text': `SELECT obj_description($1::regclass, 'pg_class')
            AS description;`,
    'values': [tableName],
  };
  pool.query(query)
    .then(data => resolve({ 'description': JSON.parse(data.rows[0].description) }))
    .catch((error) => {
      const errorMsg = `Unable to retrieve description from table ${tableName}`;
      logger.error(errorMsg);
      logger.error(error.stack);
      reject(new Error(errorMsg));
    });
});

const getEntitySchema = (role, entityName) => pool.query(`SET ROLE ${role};`)
  .then(() => pool.query(`SELECT column_name, is_nullable, data_type, character_maximum_length,
      col_description((table_schema||'.'||table_name)::regclass::oid, ordinal_position) AS description
      FROM information_schema.columns WHERE table_name='${entityName}';`))
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
    return { required, properties };
  })
  .catch((error) => {
    const errorMsg = `Unable to retrieve schema from table ${entityName}`;
    logger.error(errorMsg);
    logger.error(error.stack);
    return new Error(errorMsg);
  });

const getAllEntities = () => pool.query(`SELECT * FROM pg_catalog.pg_tables WHERE schemaname = '${config.dbSchema}';`)
  .then((data) => {
    const entitiesData = [];
    data.rows.map(obj => entitiesData.push(obj.tablename));
    return entitiesData;
  })
  .catch((error) => {
    const errorMsg = 'Unable to retrieve tables from database';
    logger.error(errorMsg);
    logger.error(error.stack);
    return new Error(errorMsg);
  });

const getEntityData = (role, entityName, filters) => new Promise((resolve, reject) => {
  pool.query(`SET ROLE ${role};`)
    .then(() => {
      const limit = config.limitRows ? ' LIMIT 100' : '';

      if (filters === null) {
        const text = `SELECT * from ${entityName}${limit}`;
        logger.info('Running query - 1');
        logger.debug(`Running query: ${text}, values: []`);
        return pool.query(text, []);
      }

      const text = `SELECT * FROM ${entityName} WHERE ${filters.queryString}${limit}`;
      logger.info('Running query - 2');
      logger.debug(`Running query: ${text}, values: ${filters.values}`);
      return pool.query(text, filters.values);
    })
    .then(data => resolve(data.rows))
    .catch((error) => {
      const errorMsg = `Unable to retrieve data from table ${entityName}`;
      logger.error(errorMsg);
      logger.error(error.stack);
      error.message = errorMsg;
      reject(new Error(errorMsg));
    });
});

const getEntityDataV2 = (role, entityName, queryString, values) => new Promise((resolve, reject) => {
  pool.query(`SET ROLE ${role};`)
    .then(() => {
      logger.info('Running query - 3');
      logger.debug(`Running query: ${queryString}, values: ${values}`);
      return pool.query(queryString, values);
    })
    .then(data => resolve(data.rows))
    .catch((error) => {
      const errorMsg = `Unable to retrieve data from table ${entityName}`;
      logger.error(errorMsg);
      logger.error(error.stack);
      error.message = errorMsg;
      reject(new Error(errorMsg));
    });
});

module.exports = {
  getAllEntities,
  getEntityData,
  getEntityDataV2,
  getEntityDescription,
  getEntitySchema,
};
