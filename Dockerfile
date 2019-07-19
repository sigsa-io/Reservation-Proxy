FROM node:8.16.0

ARG APP_DIR=/src/app

RUN mkdir -p /src/app

WORKDIR ${APP_DIR}

COPY . ${APP_DIR}

RUN npm ci

EXPOSE 3000

CMD npm start