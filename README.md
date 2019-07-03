# reference-data-api-service
This repository contains an API service used to return data from the "Reference" database. 

# Requirements  
Use of this API will require access to a Node.js environment as well as the npm (node package manager). The most recent distribution of Node.js can be found at:

https://nodejs.org/en/

Alternatively, you can use Homebrew to install the required packages, using command:

```bash
$ brew install node
$ brew install npm
```
The Node.js installation will include a version of npm in the installations. 
As a minimum, this API requires:
- node V8.10.0
- npm 6.9.0

If you already have these packages installed, you can check your current version or upgrade to the latest distribution using the commands:

```sh
## Check current installed version.
$ node -v
$ npm -v
## Update to latest version.
$ brew upgrade <package_name>
```
For further documentation regarding Homebrew visit:
https://brew.sh

# Development
To utilise the API for the development you will first need to set the following environment variables:
`export DB_CONNECTION_STRING=postgres://username:password@localhost:5433/dbname`

## Dependencies installation and running server
In order to run the API service, you will need to enter the following commands, in terminal, from the project directory. 

```bash
# install dependencies
$ npn install

# run the API server
$ npm run start-dev
```
This will first install the dependencies required to run the server, then initialise said server.

## Running tests
The repository contains several test designed to ensure the reference data API service is running correctly. Again, in terminal, input the following commands in order to run the tests and confirm everything is working as expected.

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
A linter is designed to analyse source code and flag any programming errors, bugs, suspicious constructor stylistic errors. In order to run the linter using the `$ npm run lint` command you must first specify at least the directory in which you wish to run the linter. 

In order to add any additional arguments, add -- (double dash) before any argument you wish to pass, e.g.


```bash
# run lint in the current directory
$ npm run lint -- .

# run lint in the routes directory and fix all issues
$ npm run lint -- ./routes/ --fix
```


## Building and running Docker
To build the prototype's Docker container:
```sh
docker build -t reference-data-api-service .
```

To run the resulting Docker container:
```sh
docker run -p 5000:5000 reference-data-api-service
```

## Endpoints
https://app.swaggerhub.com/apis/Viable-Data/Reference-Data-Service-API/0.0.1

