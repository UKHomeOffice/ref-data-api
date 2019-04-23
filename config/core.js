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
  port: process.env.PORT || 5000
};

module.exports = config;
