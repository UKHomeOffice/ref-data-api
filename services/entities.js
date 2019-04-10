const request = require('request');

const { postgrestBaseUrl } = require('../config/core');

const getEntitiesData = (token, callback) => {
  const options = {
    method: 'GET',
    url: postgrestBaseUrl,
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
  const options = {
    method: 'GET',
    url: postgrestBaseUrl + '/' + name,
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
