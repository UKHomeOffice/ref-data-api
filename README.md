# reference-data-api-service

An API service to return data from the "Reference" database.

## Requirements

*   npm 6.9.0
*   node v8.10.0

## Development

In order to use the API for the development you will need to set the following environment variables:

`export DB_CONNECTION_STRING=postgres://username:password@localhost:5433/dbname`

### Dependencies installation and running server
Open your terminal and run the following commands from the project directory.

```bash
# install dependencies
$ npm install

# run the api server
$ npm run start-dev
```

### Running tests

```bash
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

## Running linter

To run the linter using the `npm run lint` command you have to specify at least the directory you want linter to run.

To specify the directory and any additional arguments you need to add `--` (double dash) before the arguments you want to pass, e.g.
```bash
# run lint in the current directory
$ npm run lint -- .

# run lint in the routes directory and fix all issues
$ npm run lint -- ./routes/ --fix
```

## Building and running in Docker

To build the prototype's Docker container:

```bash
docker build -t reference-data-api-service .
```

To run the resulting Docker container:

```bash
docker run -p 5000:5000 reference-data-api-service
```

## Endpoints
GET (All Entities)
`http://localhost:5000/v1/entities`

GET (Entity)
`http://localhost:5000/v1/entities/<entity_name>`

PATCH (Entity Schema Field -> Not implemented yet)
`http://localhost:5000/v1/entities/<entity_name>`

POST (New Entity Item -> Not implemented yet)
`http://localhost:5000/v1/entities/<entity_name>`

GET (Item)
`http://localhost:5000/v1/entities/<entity_name>/items/<item_id>`

PATCH (Item Field -> Not implemented yet)
`http://localhost:5000/v1/entities/<entity_name>/items/<item_id>`
