const logger = require('./config/logger');
const server = require('./routes');

const port = 5000;

server.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
