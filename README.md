# reference-data-api-service

An API service to return data from the reference data postgrest.

## Requirements

*   npm 6.9.0
*   node v8.10.0

## Development

At the moment in order to use this application you will need the Keycloak token.
The access token can be obtained using postman, once you have the token, place it in
the `config/core.js` `token` variable.

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

PATCH (Entity Schema Field)
`http://localhost:5000/v1/entities/<entity_name>`

POST (New Entity Item)
`http://localhost:5000/v1/entities/<entity_name>`

GET (Item)
`http://localhost:5000/v1/entities/<entity_name>/items/<item_id>`

PATCH (Item Field)
`http://localhost:5000/v1/entities/<entity_name>/items/<item_id>`
