FROM node:10-alpine

ENV USERMAP_UID 1000

RUN apk update && apk upgrade

RUN mkdir -p /src
WORKDIR /src

COPY package.json .
RUN npm install
COPY . .

EXPOSE 5000

USER ${USERMAP_UID}

CMD ["npm","start"]
