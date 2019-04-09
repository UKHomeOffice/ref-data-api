'use strict'

const config = {
  logLevel: process.env.LOG_LEVEL || 'info',
  port: process.env.PORT || 5000,
  keycloakAuthUrl: process.env.KEYCLOAK_AUTH_URL,
  clientId: process.env.KEYCLOAK_CLIENT_ID,
  realm: process.env.KEYCLOAK_REALM,
  postgrestBaseUrl: process.env.POSTGREST_BASE_URL
}

module.exports = config;
