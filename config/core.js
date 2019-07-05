const camundaBaseUrl = process.env.CAMUNDA_BASE_URL || 'http://localhost:8080';
const camundaUrls = {
  'baseUrl': camundaBaseUrl,
  'submitRequest': `${camundaBaseUrl}/engine-rest/process-definition/key/reference-data-approval/submit-form`,
};

const config = {
  camundaUrls,
  'hostname': process.env.HOSTNAME || 'http://127.0.0.1:5000';
  'logLevel': process.env.LOG_LEVEL || 'info',
  'dbConnectionString': process.env.DB_CONNECTION_STRING || 'postgres://user:pass@localhost:5432/dbname',
  'port': process.env.PORT || 5000,
};

module.exports = config;
