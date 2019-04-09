const cors = require('cors')
const express = require('express');

// local imports
const config = require('./config/core');
const logger = require('./config/logger');

const app = express();
const port = config.PORT || 5000;

app.get('', (req, res) => {
  logger.info(`${req.url} - Requested`);
  res.json({data: ''});
});

app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
