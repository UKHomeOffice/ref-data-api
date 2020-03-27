const axios = require('axios');
const { validationResult } = require('express-validator/check');
const moment = require('moment');

// local imports
const config = require('../config/core');
const logger = require('../config/logger')(__filename);
const { getEntityDescription, getEntitySchema } = require('../db/entities');
const { getItemData } = require('../db/items');

const getItem = (req, res) => {
  const { name: entityName, id } = req.params;

  const promise1 = getEntityDescription(entityName);
  const promise2 = getEntitySchema(res.locals.user.refdbrole, entityName);
  const promise3 = getItemData(res.locals.user.refdbrole, entityName, id);
  const dataObject = {
    status: 'success',
    code: 200,
    entityName,
    entitySchema: {},
  };

  Promise.all([promise1, promise2, promise3])
    .then((resultsArray) => {
      dataObject.entitySchema = resultsArray[0].description;
      dataObject.entitySchema.required = resultsArray[1].required;
      dataObject.entitySchema.properties = resultsArray[1].properties;
      dataObject.itemId = resultsArray[2].id;
      dataObject.data = resultsArray[2];
      res.status(200).json(dataObject);
    })
    .catch(error => res.status(400).json({ error: error.message }));
};

const patchItemField = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    logger.error(errors.array);
    return res.status(422).json({ errors: errors.array() });
  }

  const { body } = req;
  const { name, id } = req.params;
  body.id = id;

  const date = new Date();
  const utcTimeStampString = date.toUTCString();
  const updateItemField = {
    variables: {
      action: {
        value: 'PATCH',
        type: 'String',
      },
      object: {
        value: 'Item',
        type: 'String',
      },
      entityName: {
        value: name,
        type: 'String',
      },
      requestedDateTime: {
        value: utcTimeStampString,
        type: 'String',
      },
      changeRequested: {
        value: JSON.stringify(body),
        type: 'json',
      },
    },
  };

  axios.post(config.camundaUrls.submitRequest, updateItemField)
    .then((response) => {
      logger.debug('Item field value update requested');
      logger.debug(response.data);
      res.status(200).json({
        status: 200,
        requestId: response.data.id,
      });
    })
    .catch((error) => {
      logger.error('Error posting to camunda submit request', {
        stack: error.stack,
        error: error.message,
        timestamp: moment().utc().format('D/MMM/YYYY:HH:mm:ss ZZ'),
      });

      res.status(400).json({});
    });
};

module.exports = { getItem, patchItemField };
