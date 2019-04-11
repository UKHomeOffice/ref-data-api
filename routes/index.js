const router = require('express').Router()

// local imports
const entities = require('./entities');

router.get('/v1/entities', entities.getEntities);
router.get('/v1/entities/:name', entities.getEntity);

module.exports = router
