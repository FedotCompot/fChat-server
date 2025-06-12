FROM node:lts-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

ENTRYPOINT ["npm", "start"]
