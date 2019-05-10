const postgrestBaseUrl = process.env.POSTGREST_BASE_URL || 'https://postgrest-dummy-url.co.uk';
const postgrestUrls = {
  'entities': postgrestBaseUrl,
  'entity': `${postgrestBaseUrl}/%s`,
  'item': `${postgrestBaseUrl}/%s?id=eq.%s`,
};

const config = {
  postgrestUrls,
  'logLevel': process.env.LOG_LEVEL || 'info',
  'dbConnectionString': process.env.REF_DATA_DB_CONNECTION_STRING || 'postgres://user:pass@localhost:5432/dbname',
  'port': process.env.PORT || 5000,
};

module.exports = config;
