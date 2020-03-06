const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

// local imports
const health = require('./health');
const v1 = require('./v1');
const v2 = require('./v2');
const authMiddleware = require('./authMiddleware');

const corsConfiguration = {
  origin: '*',
  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const app = express();

app.use(cors(corsConfiguration));
// 'extended': 'true' allows the values of the objects passed, to be of any type
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.options('*', cors(corsConfiguration));

// check each request for authorization token
app.use(authMiddleware);

app.use('/v1', v1);
app.use('/v2', v2);
app.get('/_health', health);

module.exports = app;
