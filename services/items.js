const axios = require('axios');
const util = require('util');

// local imports
const logger = require('../config/logger');
const { jsonify, stripStringAfterChar } = require('../helpers');
const { postgrestUrls } = require('../config/core');

/**
 * getEntities() returns all available entities.
 *
 * @param {token} Keycloak token
 * @return {object} JSON object
 */
function getEntities(token) {
  const entitiesUrl = util.format(postgrestUrls.entities);
  return axios.get(entitiesUrl, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

/**
 * getItem() returns the data for an entity item.
 *
 * @param {token} Keycloak token
 * @param {name} Entity name
 * @param {id} Item id
 * @return {object} JSON object
 */
function getItem(token, name, id) {
  const itemUrl = util.format(postgrestUrls.item, name, id);
  return axios.get(itemUrl, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

/**
 * getItemData() returns a custom object using the data
 * from entities and item.
 *
 * @param {token} Keycloak token
 * @param {name} Entity name
 * @param {id} Item id
 * @return {object} JSON object
 */
function getItemData(token, name, id) {
  const reqStartTime = new Date();

  return axios.all([
    getEntities(token),
    getItem(token, name, id)
  ]).then(axios.spread(function (entities, item) {
    // temporary functionality/logger to check how
    // long it takes to call both endpoints
    const reqEndTime = new Date();
    logger.info('Calling entities and item endpoint took: ' + ((reqEndTime - reqStartTime) / 1000) + ' seconds');

    const dataFormatStartTime = new Date();
    const { summary } = entities.data.paths['/' + name].get;
    const { description: desc, dataversion: version, schemalastupdated } = jsonify(summary);
    const { properties } = entities.data.definitions[name];

    for (let [key, obj] of Object.entries(properties)) {
      description = stripStringAfterChar(obj.description, '}');
      obj.description = jsonify(description);
    }

    // temporary functionality/logger to check how
    // long it takes to format/manipulate the data
    const dataFormatEndTime = new Date();
    logger.info('Data format took ' + ((dataFormatEndTime - dataFormatStartTime) / 1000) + ' seconds');

    return {
      'code': item.status,
      'status': item.statusText,
      'entityName': name,
      'entityLabel': '',
      'entitySchema': {
        'description': {
          'description': desc,
          'dataversion': version,
          'lastupdated': schemalastupdated
        },
        'required': entities.data.definitions[name].required,
        'properties': properties
      },
      'itemid': Number(id),
      'data': item.data
    };
  }))
}

module.exports = { getItemData };
