const cors = require('cors');
const express = require('express');

// local imports
const routes = require('./routes');
const config = require('./config/core');
const logger = require('./config/logger');

const port = config.PORT || 5000;
const app = express();

const corsConfiguration = {
  origin: '*',
  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsConfiguration));
app.options('*', cors(corsConfiguration));
app.use(routes);

app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
