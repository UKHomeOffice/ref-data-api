const axios = require('axios');
const util = require('util');

const { findObjectByKey, jsonify, stripStringAfterChar } = require('../helpers');
const { postgrestUrls } = require('../config/core');

/**
 * getEntitiesData() returns all entities.
 *
 * @param {token} Keycloak token
 * @return {result} JSON object
 */
const getEntitiesData = (token) => {
  const entitiesUrl = util.format(postgrestUrls.entities);
  return axios.get(entitiesUrl, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(function (response) {
    const result = {
      'status': response.statusText,
      'code': response.status,
      'data': []
    };

    for (const [entity, item] of Object.entries(response.data.definitions)) {
      const { summary } = response.data.paths['/' + entity].get;
      const { description, schemalastupdated, dataversion } = jsonify(summary);

      result['data'].push({
        description,
        dataversion,
        'entityName': entity,
        'label': '',
        'schema': {
          'description': item.description,
          'required': item.required,
          'properties': item.properties
        },
        'lastupdated': schemalastupdated
      });
    }
    return result;
  })
};

/**
 * getEntity() returns the data for an entity.
 *
 * @param {token} Keycloak token
 * @param {name} Entity name
 * @return {object} JSON object
 */
const getEntity = (token, name) => {
  const entityUrl = util.format(postgrestUrls.entity, name);
  return axios.get(entityUrl, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
};

/**
 * getEntityData() returns a custom object using the data
 * from entities and entity.
 *
 * @param {token} Keycloak token
 * @param {name} Entity name
 * @return {object} JSON object
 */
const getEntityData = (token, name) => {
  const entityUrl = util.format(postgrestUrls.entity, name);
  return axios.all([
    getEntitiesData(token),
    getEntity(token, name)
  ])
  .then(axios.spread(function (entities, entity) {
    const {
      description,
      dataversion,
      schema,
      lastupdated } = findObjectByKey(entities.data, 'entityName', name);

    for (let [key, obj] of Object.entries(schema.properties)) {
      let schemaDescription = stripStringAfterChar(obj.description, '}');
      obj.description = jsonify(schemaDescription);
    }

    return {
      'code': entity.status,
      'status': entity.statusText,
      'entityName': name,
      'entityLabel': '',
      'entitySchema': {
        'description': {
          description,
          dataversion,
          lastupdated
        },
        'required': schema.required,
        'properties': schema.properties
      },
      'data': entity.data
    };
  }))
};

module.exports = { getEntitiesData, getEntityData };
