const request = require('request');
const util = require('util');

const { postgrestUrls } = require('../config/core');

const getEntitiesData = (token, callback) => {
  const entitiesUrl = util.format(postgrestUrls.entities);
  const options = {
    method: 'GET',
    url: entitiesUrl,
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
