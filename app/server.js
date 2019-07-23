const logger = require('./config/logger');
const server = require('./routes');
const config = require('./config/core');


server.listen(config.port, () => {
  logger.info(`Server listening on port ${config.port}`);
});
