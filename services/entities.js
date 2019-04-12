const axios = require('axios');
const request = require('request');
const util = require('util');

const { jsonify } = require('../helpers');
const { postgrestUrls } = require('../config/core');

/**
 * getEntitiesData() returns all entities.
 *
 * @param {token} Keycloak token
 * @return {result} JSON object
 */
function getEntitiesData(token) {
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
}

const getEntityData = (token, name, callback) => {
  const entityUrl = util.format(postgrestUrls.entity, name);
  const options = {
    method: 'GET',
    url: entityUrl,
    json: true,
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  request(options, (error, response, body) => {
    if (!error) {
      callback(error, response, body);
    } else {
      callback(error, response, body);
    }
  });
};

module.exports = { getEntitiesData, getEntityData };
