FROM node:18-slim

WORKDIR /usr/src/app

COPY .npmrc .
COPY package*.json ./
RUN npm install --omit=dev

COPY src src

CMD [ "npm", "start" ]
