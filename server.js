const config = require('./config/core');
const logger = require('./config/logger');
const server = require('./routes');

const port = config.PORT || 5000;

server.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
