const express = require('express');

// local imports
const routes = require('./routes');
const config = require('./config/core');
const logger = require('./config/logger');

const app = express();
const port = config.PORT || 5000;

app.use(routes);

app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
