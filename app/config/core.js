require('dotenv').config();

const formatKey = require('./formatKey');

const engine = {
  protocol: process.env.ENGINE_PROTOCOL || 'http://',
  url: process.env.ENGINE_URL || 'localhost:8080',
};

const camundaUrls = {
  baseUrl: `${engine.protocol}${engine.url}`,
  submitRequest: `${engine.protocol}${engine.url}/engine-rest/process-definition/key/reference-data-approval/submit-form`,
};

const keycloak = {
  protocol: process.env.KEYCLOAK_PROTOCOL || 'https://',
  url: process.env.KEYCLOAK_URL || 'keycloak.lodev.xyz',
  realm: process.env.KEYCLOAK_REALM || 'cop-local',
};

const db = {
  protocol: process.env.DB_REF_PROTOCOL || 'postgres://',
  port: process.env.DB_REF_PORT || '5433',
  hostname: process.env.DB_REF_HOSTNAME || 'localhost',
  options: process.env.DB_REF_OPTIONS || '',
  dbname: process.env.DB_REF_REFERENCE_DBNAME || 'reference',
  schema: process.env.DB_REF_REFERENCE_SCHEMA || 'reference',
  username: process.env.DB_REF_REFERENCE_AUTHENTICATOR_USERNAME || 'authenticatorreference',
  password: process.env.DB_REF_REFERENCE_AUTHENTICATOR_PASSWORD || 'mysecretpassword',
};

const dbConnectionString = `${db.protocol}${db.username}:${db.password}@${db.hostname}:${db.port}/${db.dbname}${db.options}`;
const keycloakClientPublicKey = process.env.API_REF_KEYCLOAK_CLIENT_PUBLIC_KEY || 'dummykey';
const decodedKey = Buffer.from(keycloakClientPublicKey, 'base64').toString();
const dbRead = process.env.DB_REF_READ_ROLE || 'refreadonly';

const config = {
  camundaUrls,
  dbConnectionString,
  dbSchema: process.env.DB_REF_REFERENCE_SCHEMA || 'reference',
  dbRead,
  dbWrite: process.env.DB_REF_WRITE_ROLE || 'refservice',
  iss: `${keycloak.protocol}${keycloak.url}/realms/${keycloak.realm}`,
  keycloakClientId: process.env.API_REF_KEYCLOAK_CLIENT_ID || 'api-ref',
  keycloakClientPublicKey: formatKey(decodedKey),
  limitRows: process.env.LIMIT_ROWS || false,
  logLevel: process.env.API_REF_LOG_LEVEL || 'info',
  port: process.env.API_REF_PORT || '5000',
  hawkCredentials: [
    {
      user: 'sGMR Data API',
      id: process.env.HAWK_SGMR_ACCESS_KEY_ID,
      key: process.env.HAWK_SGMR_SECRET_ACCESS_KEY,
      algorithm: 'sha256',
      role: dbRead,
    },
  ],
};

module.exports = config;
