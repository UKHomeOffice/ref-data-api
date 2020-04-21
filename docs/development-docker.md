## Build the Docker container

```sh
docker build -t ref-data-api .
```

## Run the Docker container

```sh
docker run -p 5000:5000 ref-data-api
```

## Run tests

```sh
# from outside the container
docker run -t ref-data-api:<tag> sh -c "npm run test"

# from within the container
npm run test
```

## Run linter

```sh
# from outside the container
docker run -t ref-data-api:<tag> sh -c "npm run lint -- ."

# from within the container
npm run lint -- .
```
