## Reference Data API Service

This API forms part of a Reference Data Service that is being developed by the UK Home Office. It provides a private API for integration with web applications and other systems.

## Requirements

* npm 6.9.0 (minimum working version)
* node v8.10.0 (minimum working version)

## Usage

To use this API first clone this repo

```sh
git@github.com:UKHomeOffice/reference-data-api-service.git
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
docker build -t reference-data-api-service .
```

To run the resulting Docker container

```sh
docker run -p 5000:5000 reference-data-api-service
```

Running tests (from outside the Docker container)

```sh
docker run -t reference-data-api-service:<tag> sh -c "npm run test"
```

Running linter (from outside the Docker container)

```sh
docker run -t reference-data-api-service:<tag> sh -c "npm run lint -- ."
```

If you prefer to run tests or linter from within the container

1. run the Docker container with `docker run -p 5000:5000 reference-data-api-service`

2. go into the container by opening a new terminal tab and execute `docker exect -it <docker_container_id> sh`

Once inside the container to run tests execute

```sh
$ npm run test
```

And to run linter execute

```sh
$ npm run lint -- .

```

## Endpoints
The API interface uses OpenAPI 3.0 and is documented in Swagger

https://app.swaggerhub.com/apis/Viable-Data/Reference-Data-Service-API/0.0.1

and on GitHub

https://github.com/UKHomeOffice/reference-data-governance-api-spec
