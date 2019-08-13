const axios = require('axios');
const { validationResult } = require('express-validator/check');

// local imports
const config = require('../config/core');
const logger = require('../config/logger')(__filename);
const pool = require('../db/index');
const { queryFilterDecode, queryFilterDecodeV2 } = require('../db/utils');
const {
  getAllEntities,
  getEntityData,
  getEntityDataV2,
  getEntityDescription,
  getEntitySchema,
} = require('../db/entities');

const getEntities = async (req, res) => {
  const data = {
    'status': 'success',
    'code': 200,
    'data': [],
  };

  const entities = await getAllEntities();

  if (entities.message) {
    // if an error occurs getting all entities we don't need to
    // proceed since we would expect entities to be an array
    return res.status(400).json({ 'error': entities.message });
  }

  const promiseArray = entities.map(async (entity) => {
    if (entity !== 'flywayreferencehistory') {
      const dataObject = {};
      dataObject.entityName = entity;

      const description = await getEntityDescription(entity);
      dataObject.schema = description.description;

      const schema = await getEntitySchema(res.locals.user.refdbrole, entity);
      dataObject.schema.required = schema.required;
      dataObject.schema.properties = schema.properties;

      data.data.push(dataObject);
    }
  });

  Promise.all(promiseArray)
    .then(() => res.status(200).json(data))
    .catch(error => res.status(400).json({ 'error': error.message }));
};

const getEntity = (req, res) => {
  // set default to `false`
  const { schemaOnly = 'false' } = req.query;
  const { 'name': entityName } = req.params;
  const queryParams = req.url.split('?')[1];
  let queryFilters = null;

  if (schemaOnly === 'false' && queryParams) {
    queryFilters = queryFilterDecode(queryParams);
  }

  const entityDescription = getEntityDescription(entityName);
  const entitySchema = getEntitySchema(res.locals.user.refdbrole, entityName);
  const dataObject = {
    'status': 'success',
    'code': 200,
    'entityName': entityName,
    'entitySchema': {
      'required': {},
      'properties': {},
    },
  };

  // no data is required, only the entity schema which includes
  // description, required and properties
  if (schemaOnly === 'true') {
    Promise.all([entityDescription, entitySchema])
      .then((resultsArray) => {
        dataObject.entitySchema = resultsArray[0].description;
        dataObject.entitySchema.required = resultsArray[1].required;
        dataObject.entitySchema.properties = resultsArray[1].properties;
        res.status(200).json(dataObject);
      })
      .catch((error) => {
        logger.error(error.stack);
        res.status(400).json({ 'error': error.message });
      });
  } else {
    const entityData = getEntityData(res.locals.user.refdbrole, entityName, queryFilters);

    Promise.all([entityDescription, entitySchema, entityData])
      .then((resultsArray) => {
        dataObject.entitySchema = resultsArray[0].description;
        dataObject.entitySchema.required = resultsArray[1].required;
        dataObject.entitySchema.properties = resultsArray[1].properties;
        dataObject.data = resultsArray[2];
        res.status(200).json(dataObject);
      })
      .catch((error) => {
        logger.error(error.stack);
        res.status(400).json({ 'error': error.message });
      });
  }
};

const getEntityV2 = (req, res) => {
  const queryParams = req.query;

  // get schema mode, if not set the API will return both the schema and data
  const mode = queryParams.mode;
  const { name } = req.params;

  // delete `mode` from `queryParams` since it does not need to be decoded
  delete queryParams.mode;

  if (queryParams.filter && !Array.isArray(queryParams.filter)) {
    queryParams.filter = [queryParams.filter];
  }

  const queryString = queryFilterDecodeV2({ name, queryParams });

  if (!queryString) {
    return res.status(400).json({ 'error': 'Invalid query parameters' });
  }

  if (mode === 'dataOnly') {
    const entityData = getEntityDataV2(res.locals.user.refdbrole, name, queryString);

    Promise.all([entityData])
      .then((resultsArray) => {
        res.status(200).json({ 'data': resultsArray[0] });
      })
      .catch((error) => {
        logger.error(error.stack);
        res.status(400).json({ 'error': error.message });
      });
  } else if (mode === 'schemaOnly') {
    const dataObject = {
      'status': 'success',
      'code': 200,
      'entityName': name,
      'entitySchema': {
        'required': {},
        'properties': {},
      },
    };
    const entityDescription = getEntityDescription(name);
    const entitySchema = getEntitySchema(res.locals.user.refdbrole, name);

    Promise.all([entityDescription, entitySchema])
      .then((resultsArray) => {
        dataObject.entitySchema = resultsArray[0].description;
        dataObject.entitySchema.required = resultsArray[1].required;
        dataObject.entitySchema.properties = resultsArray[1].properties;
        res.status(200).json(dataObject);
      })
      .catch((error) => {
        logger.error(error.stack);
        res.status(400).json({ 'error': error.message });
      });
  } else {
    const dataObject = {
      'status': 'success',
      'code': 200,
      'entityName': name,
      'entitySchema': {
        'required': {},
        'properties': {},
      },
    };
    const entityDescription = getEntityDescription(name);
    const entitySchema = getEntitySchema(res.locals.user.refdbrole, name);
    const entityData = getEntityDataV2(res.locals.user.refdbrole, name, queryString);

    Promise.all([entityDescription, entitySchema, entityData])
      .then((resultsArray) => {
        dataObject.entitySchema = resultsArray[0].description;
        dataObject.entitySchema.required = resultsArray[1].required;
        dataObject.entitySchema.properties = resultsArray[1].properties;
        dataObject.data = resultsArray[2];
        res.status(200).json(dataObject);
      })
      .catch((error) => {
        logger.error(error.stack);
        res.status(400).json({ 'error': error.message });
      });
  }
};

const patchEntitySchema = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ 'errors': errors.array() });
  }

  const { body } = req;
  const { name } = req.params;
  const date = new Date();
  const utcTimeStampString = date.toUTCString();
  const updateEntitySchema = {
    'variables': {
      'action': {
        'value': 'PATCH',
        'type': 'string',
      },
      'object': {
        'value': 'Schema',
        'type': 'string',
      },
      'entityName': {
        'value': name,
        'type': 'string',
      },
      'requestedDateTime': {
        'value': utcTimeStampString,
        'type': 'string',
      },
      'changeRequested': {
        'value': JSON.stringify(body),
        'type': 'json',
      },
    },
  };

  axios.post(config.camundaUrls.submitRequest, updateEntitySchema)
    .then((response) => {
      logger.info('Schema field value update requested');
      logger.info(response.data);
      res.status(200).json(
        {
          'status': 200,
          'requestId': response.data.id,
        },
      );
    })
    .catch((error) => {
      logger.error(error.stack);
      res.status(400).json({ 'error': error.message });
    });
};

const postEntityItem = (req, res) => {
  const { body } = req;
  const { name } = req.params;

  if (Object.entries(body).length === 0 && body.constructor === Object) {
    logger.error('Invalid JSON');
    logger.error(body);
    return res.status(400).json({ 'message': 'Invalid JSON object' });
  }

  const date = new Date();
  const utcTimestampString = date.toUTCString();

  const newEntityItem = {
    'variables': {
      'action': {
        'value': 'POST',
        'type': 'String',
      },
      'object': {
        'value': 'Item',
        'type': 'String',
      },
      'entityName': {
        'value': name,
        'type': 'String',
      },
      'requestedDateTime': {
        'value': utcTimestampString,
        'type': 'String',
      },
      'changeRequested': {
        'value': JSON.stringify(body),
        'type': 'json',
      },
    },
  };

  axios.post(config.camundaUrls.submitRequest, newEntityItem)
    .then((response) => {
      logger.info('New entity item requested');
      logger.info(response.data);
      res.status(200).json(
        {
          'status': 200,
          'requestId': response.data.id,
        },
      );
    })
    .catch((error) => {
      logger.error(error.stack);
      logger.info(error.message);
      res.status(400).json({});
    });
};

module.exports = {
  getEntities,
  getEntity,
  getEntityV2,
  patchEntitySchema,
  postEntityItem,
};
