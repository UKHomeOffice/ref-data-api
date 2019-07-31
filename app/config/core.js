const camundaBaseUrl = process.env.CAMUNDA_BASE_URL || 'http://localhost:8080';
const camundaUrls = {
  'baseUrl': camundaBaseUrl,
  'submitRequest': `${camundaBaseUrl}/engine-rest/process-definition/key/reference-data-approval/submit-form`,
};

const config = {
  camundaUrls,
  'logLevel': process.env.LOG_LEVEL || 'info',
  'dbConnectionString': process.env.DB_CONNECTION_STRING || 'postgres://authenticatorreference:auth1234@localhost:5433/reference',
  'iss': process.env.KEYCLOAK_URL || 'http://keycloak.lodev.xyz/auth/realms/dev',
  'keycloak_client_id': process.env.KEYCLOAK_CLIENT_ID || 'refdata-api',
  'port': process.env.PORT || '5000',
};

module.exports = config;
