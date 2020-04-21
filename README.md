# Reference Data API Service

This API forms part of a Reference Data Service that is being developed by the UK Home Office. It provides a private API for integration with web applications and other systems.

## System Requirements

- npm 6.9.0 (minimum working version)
- node v8.10.0 (minimum working version)

## Usage

To use this API first clone this repo

```sh
git@github.com:UKHomeOffice/ref-data-api.git
```


## Setup

### [Setup a local ref-data database for use with the API](docs/setup.md)

### [Environment variables](docs/environment-variables.md)
* Keycloak integration variables
* Full list

### [Development outside Docker](docs/development.md)
* Install required libraries
* Setup environment variables
* Run API server
* Run Tests
* Run Linter

### [Development with Docker](docs/development-docker.md)
* Build container
* Run container
* Run Tests
* Run Linter

### [Drone Secrets](docs/drone-secrets.md)
* full list of secret
* example values
* etc.

## Endpoints

The API interface uses OpenAPI 3.0 and is documented in [Swagger](https://api-spec.dev.refdata.homeoffice.gov.uk) and [on GitHub](https://github.com/UKHomeOffice/reference-data-governance-api-spec)

