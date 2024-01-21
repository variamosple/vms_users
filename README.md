# Variamos Users Microservice

## Description

Microservice that allows to get Variamos users.

## Installation

```bash
$ yarn install
```

## Set environment variables

If you want to configure the database connection settings you can create a `.env` file or declare the following variables on your environment:

```bash
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=
DATABASE_SCHEMA=
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Postman Collection

Check the postman collection stored on `docs/postman` to see all the API services this microservices exposes.