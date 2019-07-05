const request = require('request');

// local imports
const config = require('./config/core');

const options = {  
  url : `${config.hostname}/_health`,
  timeout : 2000
};

request(options, (error, response, body) => {
  if (response.statusCode == 200) {
    console.log(`STATUS: ${response.statusCode}`);
    process.exit(0);
  } else {
    console.log(`ERROR: ${error}`);
    process.exit(1);
  }
});
