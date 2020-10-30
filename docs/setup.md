## Setup a local ref-data database for use with the API

To have a local copy of the reference data you can run the following which will start a postgres docker container which you can connect to and seed the data.

- Clone the repo:

  ```bash
  git clone git@github.com:UKHomeOffice/RefData.git
  git clone PRIVATE_REF_DATA
  ```

- Run the command to start docker

```bash
PUBLIC_REFDATA_FLYWAY=/path/to/RefData PRIVATE_REFDATA_FLYWAY=/path/to/private-refdata docker-compose up
docker logs public_refdata_flyway -f
```

Upon completion the database will be up and accessible via port tcp/5433 and the API on port tcp/5001. The docker compose file contains the different users and secrets which allow connecting to the different roles. An example to connect as the main root owner (not advised for service accounts which should use the authenticator user and switch role):

## Note

To clean up the running instance and take it down run:

```bash
docker-compose rm -vs
```
