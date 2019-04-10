const router = require('express').Router();

// local imports
const logger = require('../config/logger');
const { getEntitiesData } = require('../services/entities');

const token = '';

/**
 * return all entities using the
 * token passed in the request headers
 */
const getEntities = (req, res) => {
  getEntitiesData(token, (error, response, data) => {
    if (!error && response.statusCode === 200) {
      const result = {
        'status': response.statusMessage,
        'code': response.statusCode,
        'data': []
      };

      for (const [entity, item] of Object.entries(data.definitions)) {
        const { summary } = data.paths['/' + entity].get;
        const { description, schemalastupdated, dataversion } = JSON.parse(summary);

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
      res.json(result);
    } else {
      res.json({
        'code': response.statusCode,
        'error': error,
        'body': response.body
      });
    }
  });
};
