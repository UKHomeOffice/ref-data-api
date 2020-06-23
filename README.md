# Reference Data API Service

This API forms part of a Reference Data Service that is being developed by the UK Home Office. It provides a private API for integration with web applications and other systems.

## System Requirements

- npm 6.9.0 (minimum working version)
- node v8.10.0 (minimum working version)

## Setup

### Clone repo
```
git@github.com:UKHomeOffice/ref-data-api.git
```

### Setup database
* [Setup a local ref-data database for use with the API](docs/setup.md#setup-a-local-ref-data-database-for-use-with-the-api)

### Environment variables
* [Keycloak integration variables](docs/environment-variables.md#required-environment-variables-for-integration-with-keycloak)
* [Full list](docs/environment-variables.md#full-list-of-environment-variables)

### Development outside Docker
* [Install required libraries](docs/development.md#install-project-dependencies)
* [Setup environment variables](docs/environment-variables.md)
* [Run API server](docs/development.md#run-the-api-server)
* [Run Tests](docs/development.md#running-tests)
* [Run Linter](docs/development.md#running-linter)

### Development with Docker
* [Build container](docs/development-docker.md#build-the-docker-container)
* [Run container](docs/development-docker.md#run-the-docker-container)
* [Run Tests](docs/development-docker.md#run-tests)
* [Run Linter](docs/development-docker.md#run-linter)

### [Drone Secrets](docs/drone-secrets.md)

## Endpoints

The API interface uses OpenAPI 3.0 and is documented in [Swagger](https://api-spec.dev.refdata.homeoffice.gov.uk) and [on GitHub](https://github.com/UKHomeOffice/reference-data-governance-api-spec)

## Modelling the schema

### Setup

Install all the required packages

```
npm install
```

Export the variables

```
export API_REF_KEYCLOAK_CLIENT_PUBLIC_KEY='a base64 encoded string of the keycloak realm public key'
export KEYCLOAK_URL='xxx.xxx.homeoffice.gov.uk/auth
```

### Schemas

Schemas can be found at https://github.com/UKHomeOffice/RefData/tree/master/schemas/reference
You need to write a js class in `models` and a unit test in `test/models`

### Running the unit test

```
npm run test
```
