const router = require('express').Router();

// local imports
const entities = require('./entities');
const items = require('./items');

router.get('/v1/entities', entities.getEntities);
router.get('/v1/entities/:name', entities.getEntity);
router.patch('/v1/entities/:name', entities.patchEntitySchema);
router.post('/v1/entities/:name', entities.postEntityItem);
router.get('/v1/entities/:name/items/:id', items.getItem);
router.patch('/v1/entities/:name/items/:id', items.patchItemField);

module.exports = router;
