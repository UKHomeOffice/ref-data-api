'use strict'

const postgrestBaseUrl = process.env.POSTGREST_BASE_URL;
const postgrestUrls = {
  entities: postgrestBaseUrl,
  entity: postgrestBaseUrl + '/%s',
  item: postgrestBaseUrl + '/%s?id=eq.%s'
};

const config = {
  postgrestUrls,
  logLevel: process.env.LOG_LEVEL || 'info',
  port: process.env.PORT || 5000,
  keycloakAuthUrl: process.env.KEYCLOAK_AUTH_URL,
  clientId: process.env.KEYCLOAK_CLIENT_ID,
  realm: process.env.KEYCLOAK_REALM,
  token: ''
};

module.exports = config;
