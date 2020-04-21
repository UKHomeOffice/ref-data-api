# Reference Data API Service

This API forms part of a Reference Data Service that is being developed by the UK Home Office. It provides a private API for integration with web applications and other systems.

## Requirements

- npm 6.9.0 (minimum working version)
- node v8.10.0 (minimum working version)

## Usage

To use this API first clone this repo

```sh
git@github.com:UKHomeOffice/ref-data-api.git
```

1. [Setup](docs/setup.md) (git repositories for the initial setup)

1. [Environment Variables](docs/environment-variables.md) (full list, and important ones)

1. [Development guide](docs/development.md) (without docker)

1. [Development with Docker](docs/development-docker.md) (running scripts within the container)

1. [Drone secrets](docs/drone-secrets.md) (full list of secrets, example values, etc.)

## Endpoints

The API interface uses OpenAPI 3.0 and is documented in Swagger

https://api-spec.dev.refdata.homeoffice.gov.uk

and on GitHub

https://github.com/UKHomeOffice/reference-data-governance-api-spec

