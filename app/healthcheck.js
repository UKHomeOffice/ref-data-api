const request = require('request');
const config = require('./config/core');

const options = {
  url: `http://127.0.0.1:${config.port}/_health`,
  timeout: 2000,
};

request(options, (error, response, body) => {
  if (response && response.statusCode === 200) {
    // eslint-disable-next-line no-console
    console.log(`STATUS: ${response.statusCode}`);
    process.exit(0);
  } else {
    // eslint-disable-next-line no-console
    console.log(`ERROR: ${error}`);
    process.exit(1);
  }
});
