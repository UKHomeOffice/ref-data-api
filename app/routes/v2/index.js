const express = require('express');

// local imports
const entities = require('../entities');

const app = express();

app.get('/entities/:name', entities.getEntityV2);

module.exports = app;
