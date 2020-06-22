FROM node:10-alpine

ENV USERMAP_UID 1000
ENV PORT 5001

RUN apk update && apk upgrade

RUN mkdir -p /src
WORKDIR /src

COPY app /src/app
COPY test /src/test
COPY models /src/models
COPY migrations /src/migrations
COPY seeders /src/seeders
COPY config /src/config
COPY .sequelizerc /src/
COPY package* /src/
COPY .eslint* /src/

RUN npm ci

EXPOSE ${PORT}

USER ${USERMAP_UID}

HEALTHCHECK --interval=10s --timeout=2s --start-period=15s CMD node healthcheck.js
CMD ["npm","start"]
