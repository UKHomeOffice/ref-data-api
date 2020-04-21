# Setting environment variables

Once you've cloned the project, set the following environment variables

```sh
export DB_CONNECTION_STRING=postgres://<username>:<password>@localhost:5433/<dbname>

# set the value of the following environment variable to the keycloak public key
export API_REF_KEYCLOAK_CLIENT_PUBLIC_KEY
```

## Key environment variables to set

1. `KEYCLOAK_URL` - You will want to use the correct instance of Keycloak
1. `KEYCLOAK_REALM` - You will want to use the correct realm for the key you have generated, this must match what is found in your JWT.
1. `DB_REF_HOSTNAME` - If you are using a local instance, you may want to use the docker container IP specifically, or `localhost` or `0.0.0.0` depending on your configuration.
1. `API_REF_KEYCLOAK_CLIENT_PUBLIC_KEY` - This is the Keycloak client's public key - the one that was used to encode your JWT - it should be Base64 encoded as some special characters in a JWT cannot be passed in easily through environment variables. It helps to ensure validity of the JWT used.

## Full list of environment variables

```sh
ENGINE_PROTOCOL
ENGINE_URL
KEYCLOAK_PROTOCOL
KEYCLOAK_URL
KEYCLOAK_REALM
DB_REF_PROTOCOL
DB_REF_PORT
DB_REF_HOSTNAME
DB_REF_OPTIONS
DB_REF_REFERENCE_DBNAME
DB_REF_REFERENCE_SCHEMA
DB_REF_REFERENCE_AUTHENTICATOR_USERNAME
DB_REF_REFERENCE_AUTHENTICATOR_PASSWORD
DB_REF_REFERENCE_SCHEMA
DB_REF_READ_ROLE
DB_REF_WRITE_ROLE
API_REF_KEYCLOAK_CLIENT_ID
LIMIT_ROWS
API_REF_LOG_LEVEL
API_REF_PORT
API_REF_KEYCLOAK_CLIENT_PUBLIC_KEY
```

