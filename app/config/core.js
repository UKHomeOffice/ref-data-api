const engine = {
  'protocol': process.env.ENGINE_PROTOCOL || 'http',
  'url': process.env.ENGINE_URL || 'localhost:8080',
};

const camundaUrls = {
  'baseUrl': `${engine.protocol}${engine.url}`,
  'submitRequest': `${engine.protocol}${engine.url}/engine-rest/process-definition/key/reference-data-approval/submit-form`,
};

const keycloak = {
  'protocol': process.env.KEYCLOAK_PROTOCOL || 'http://',
  'url': process.env.KEYCLOAK_URL || 'localhost',
  'realm': process.env.KEYCLOAK_REALM || 'dev,',
};

const db = {
  'protocol': process.env.DB_REF_PROTOCOL || 'postgres://',
  'port': process.env.DB_REF_PORT || '5432',
  'hostname': process.env.DB_REF_HOSTNAME || 'localhost',
  'options': process.env.DB_REF_OPTIONS || '',
  'dbname': process.env.DB_REF_REFERENCE_DBNAME || 'reference',
  'schema': process.env.DB_REF_REFERENCE_SCHEMA || 'reference',
  'username': process.env.DB_REF_REFERENCE_AUTHENTICATOR_USERNAME || 'authenticator',
  'password': process.env.DB_REF_REFERENCE_AUTHENTICATOR_PASSWORD || 'auth1234',
};

const config = {
  camundaUrls,
  'logLevel': process.env.API_REF_LOG_LEVEL || 'info',
  'dbConnectionString': `${db.protocol}${db.username}:${db.password}@${db.hostname}:${db.port}/${db.dbname}`,
  'dbSchema': process.env.DB_REF_REFERENCE_SCHEMA || 'reference',
  'iss': `${keycloak.protocol}${keycloak.url}/auth/realms/${keycloak.realm}`,
  'keycloak_client_id': process.env.API_REF_KEYCLOAK_CLIENT_ID || 'refdata-api',
  'port': process.env.API_REF_PORT || '5000',
};

module.exports = config;
