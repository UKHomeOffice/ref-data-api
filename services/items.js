const axios = require('axios');
const util = require('util');

// local imports
const logger = require('../config/logger');
const { getEntitiesData } = require('./entities');
const { findObjectByKey, jsonify, stripStringAfterChar } = require('../helpers');
const { postgrestUrls } = require('../config/core');

/**
 * getItem() returns the data for an entity item.
 *
 * @param {token} Keycloak token
 * @param {name} Entity name
 * @param {id} Item id
 * @return {object} JSON object
 */
const getItem = (token, name, id) => {
  const itemUrl = util.format(postgrestUrls.item, name, id);
  return axios.get(itemUrl, {
    'headers': {
      'Authorization': `Bearer ${token}`,
    },
  });
};

/**
 * getItemData() returns a custom object using the data
 * from entities and item.
 *
 * @param {token} Keycloak token
 * @param {name} Entity name
 * @param {id} Item id
 * @return {object} JSON object
 */
const getItemData = (token, name, id) => {
  const reqStartTime = new Date();

  return axios.all([
    getEntitiesData(token),
    getItem(token, name, id),
  ])
    .then(axios.spread((entities, item) => {
    // temporary functionality/logger to check how
    // long it takes to call both endpoints
      const reqEndTime = new Date();
      logger.info(`Calling entities and item endpoint took: ${(reqEndTime - reqStartTime) / 1000} seconds`);

      const dataFormatStartTime = new Date();
      const {
        description,
        dataversion,
        schema,
        lastupdated,
      } = findObjectByKey(entities.data, 'entityName', name);

      for (const [key, obj] of Object.entries(schema.properties)) {
        const schemaDescription = stripStringAfterChar(obj.description, '}');
        obj.description = jsonify(schemaDescription);
      }

      // temporary functionality/logger to check how
      // long it takes to format/manipulate the data
      const dataFormatEndTime = new Date();
      logger.info(`Data format took ${(dataFormatEndTime - dataFormatStartTime) / 1000} seconds`);

      return {
        'code': item.status,
        'status': item.statusText,
        'entityName': name,
        'entityLabel': '',
        'entitySchema': {
          'description': {
            description,
            dataversion,
            lastupdated,
          },
          'required': schema.required,
          'properties': schema.properties,
        },
        'itemid': Number(id),
        'data': item.data,
      };
    }))
    .catch((error) => {
      if (error.response) {
        logger.error(`Error: ${error.response.data.message}`);
        return ({
          'code': error.response.status,
          'status': error.response.statusText,
          'data': error.response.data.message,
        });
      }
      if (error.request) {
        return ({ 'message': error.request });
      }
      logger.error(`${error.message}`);
      return ({ 'message': error.message });
    });
};

module.exports = { getItemData };
