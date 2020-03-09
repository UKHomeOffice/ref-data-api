## Reference Data API Service

This API forms part of a Reference Data Service that is being developed by the UK Home Office. It provides a private API for integration with web applications and other systems.

## Requirements

- npm 6.9.0 (minimum working version)
- node v8.10.0 (minimum working version)

## Usage

To use this API first clone this repo

```sh
git@github.com:UKHomeOffice/ref-data-api.git
```

### Development without Docker

Once you've cloned the project, set the following environment variables

```sh
export DB_CONNECTION_STRING=postgres://username:password@localhost:5433/dbname
```

Install project dependencies

```sh
$ npm install
```

Run the API server

```sh
npm run start-dev
```

#### Runing tests

```sh
# run mocha tests
$ npm run test

# run mocha tests for a specific file
$ npm run test test/routes/entities.test.js

# run mocha tests for a specific folder
$ npm run test test/routes/

# run mocha tests with coverage
$ npm run coverage

# run mocha tests for a specific file with a breakpoint
$ mocha --inspect-brk test/routes/entities.test.js
```

#### Running linter

To run the linter using the npm run lint command you have to specify at least the directory you want linter to run.

To specify the directory and any additional arguments you need to add -- (double dash) before the arguments you want to pass, e.g.

```sh
# run lint in the current directory
$ npm run lint -- .

# run lint in the routes directory and fix all issues
$ npm run lint -- ./routes/ --fix
```

## Development with Docker

Once you've cloned the project, build the prototype Docker container

```sh
docker build -t ref-data-api .
```

To run the resulting Docker container

```sh
docker run -p 5000:5000 ref-data-api
```

Running tests (from outside the Docker container)

```sh
docker run -t ref-data-api:<tag> sh -c "npm run test"
```

Running linter (from outside the Docker container)

```sh
docker run -t ref-data-api:<tag> sh -c "npm run lint -- ."
```

If you prefer to run tests or linter from within the container

1. run the Docker container with `docker run -p 5000:5000 ref-data-api`

2. go into the container by opening a new terminal tab and execute `docker exect -it <docker_container_id> sh`

Once inside the container to run tests execute

```sh
npm run test
```

And to run linter execute

```sh
npm run lint -- .
```

## Local environment setup with Docker

To have a local copy of the reference data you can run the following which will start a postgres docker container which you can connect to and seed the data.

- Clone the repo:

  ```bash
  git clone git@github.com:UKHomeOffice/RefData.git
  git clone PRIVATE_REF_DATA
  ```

- Run the command to start docker

```bash
docker network create db
docker network create web
KEYCLOAK_URL=http://keycloak.lodev.xyz/auth/realms/dev KEYCLOAK_CLIENT_ID=refdata-api KEYCLOAK_CLIENT_PUBLIC_KEY=s0m3s3cr3t PUBLIC_REFDATA_FLYWAY=/Users/XXX/GIT/cop/RefData PRIVATE_REFDATA_FLYWAY=/Users/XXX/GIT/cop/private_refdata docker-compose up
docker logs public_refdata_flyway -f
```

Upon completion the database will be up and accessible via port tcp/5433. The docker compose file contains the different users and secrets which allow connecting to the different roles. An example to connect as the main root owner (not advised for service accounts which should use the authenticator user and switch role):

### Note

To clean up the running instance and take it down run:

```bash
docker-compose rm -vs
```

## Endpoints

The API interface uses OpenAPI 3.0 and is documented in Swagger

https://api-spec.dev.refdata.homeoffice.gov.uk

and on GitHub

https://github.com/UKHomeOffice/reference-data-governance-api-spec

# Drone secrets

| Name                                        | Example value                                                                                                                                                      |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| api_ref_image                               | quay.io/ukhomeofficedigital/ref-data-api                                                                                                                           |
| api_ref_keycloak_client_id                  | keycloak client name                                                                                                                                               |
| api_ref_keycloak_client_public_key              | keycloak client public key                                                                                                                                             |
| api_ref_name                                | ref-data-api                                                                                                                                                       |
| api_ref_port                                | 5001                                                                                                                                                               |
| db_ref_options                              | ?ssl=true                                                                                                                                                          |
| db_ref_port                                 | 5432                                                                                                                                                               |
| db_ref_reference_authenticator_username     | xxx                                                                                                                                                                |
| db_ref_reference_dbname                     | xxx                                                                                                                                                                |
| db_ref_reference_schema                     | xxx                                                                                                                                                                |
| dev_drone_aws_access_key_id                 | https://console.aws.amazon.com/iam/home?region=eu-west-2#/users/bf-it-devtest-drone?section=security_credentials                                                   |
| dev_drone_aws_secret_access_key             | https://console.aws.amazon.com/iam/home?region=eu-west-2#/users/bf-it-devtest-drone?section=security_credentials                                                   |
| drone_public_token                          | Drone token (Global for all github repositories and environments)                                                                                                  |
| env_api_ref_kube_token                      | xxx                                                                                                                                                                |
| env_api_ref_limit_rows                      | false                                                                                                                                                              |
| env_api_ref_url                             | api.dev.refdata.homeoffice.gov.uk, api.staging.refdata.homeoffice.gov.uk, api.refdata.homeoffice.gov.uk                                                            |
| env_db_ref_hostname                         | copreferencedev.notprod.acp.homeoffice.gov.uk, coprefdatastaging.crckizhiyjmt.eu-west-2.rds.amazonaws.com, coprefdataprod.crckizhiyjmt.eu-west-2.rds.amazonaws.com |
| env_db_ref_reference_authenticator_password | xxx                                                                                                                                                                |
| env_keycloak_realm                          | cop-dev, cop-staging, cop-prod                                                                                                                                     |
| env_keycloak_url                            | sso-dev.notprod.homeoffice.gov.uk/auth, sso.digital.homeoffice.gov.uk/auth                                                                                         |
| env_kube_namespace_refdata                  | refdata-dev, cop-refdata-staging, cop-refdata                                                                                                                      |
| env_kube_server                             | https://kube-api-notprod.notprod.acp.homeoffice.gov.uk, https://kube-api-prod.prod.acp.homeoffice.gov.uk                                                           |
| log_level_debug                             | debug                                                                                                                                                              |
| log_level_info                              | info                                                                                                                                                               |
| nginx_image                                 | quay.io/ukhomeofficedigital/nginx-proxy                                                                                                                            |
| nginx_tag                                   | latest                                                                                                                                                             |
| production_drone_aws_access_key_id          | https://console.aws.amazon.com/iam/home?region=eu-west-2#/users/bf-it-prod-drone?section=security_credentials                                                      |
| production_drone_aws_secret_access_key      | https://console.aws.amazon.com/iam/home?region=eu-west-2#/users/bf-it-prod-drone?section=security_credentials                                                      |
| protocol_https                              | https://                                                                                                                                                           |
| protocol_postgres                           | postgres://                                                                                                                                                        |
| quay_password                               | xxx (Global for all repositories and environments)                                                                                                                 |
| quay_username                               | docker (Global for all repositories and environments)                                                                                                              |
| slack_webhook                               | https://hooks.slack.com/services/xxx/yyy/zzz (Global for all repositories and environments)                                                                        |
| staging_drone_aws_access_key_id             | https://console.aws.amazon.com/iam/home?region=eu-west-2#/users/bf-it-prod-drone?section=security_credentials                                                      |
| staging_drone_aws_secret_access_key         | https://console.aws.amazon.com/iam/home?region=eu-west-2#/users/bf-it-prod-drone?section=security_credentials                                                      |
