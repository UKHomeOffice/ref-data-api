const cors = require('cors');
const express = require('express');
// const router = require('express').Router();

// local imports
const entities = require('./entities');
const items = require('./items');

const app = express();
const corsConfiguration = {
  origin: '*',
  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsConfiguration));
app.options('*', cors(corsConfiguration));

app.get('/v1/entities', entities.getEntities);
app.get('/v1/entities/:name', entities.getEntity);
app.patch('/v1/entities/:name', entities.patchEntitySchema);
app.post('/v1/entities/:name', entities.postEntityItem);
app.get('/v1/entities/:name/items/:id', items.getItem);
app.patch('/v1/entities/:name/items/:id', items.patchItemField);

module.exports = app;
