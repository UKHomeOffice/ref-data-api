# Development with Docker

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

2. go into the container by opening a new terminal tab and execute `docker exec -it <docker_container_id> sh`

Once inside the container to run tests execute
```sh npm run test ```

And to run linter execute

```sh npm run lint -- .```
