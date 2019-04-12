# reference-data-api-service
An API service to return data from the reference data postgrest.

## Requirements
* npm 6.9.0
* node v8.10.0

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

### Endpoints
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
