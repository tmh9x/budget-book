FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json .
RUN npm ci
COPY . . 
RUN npm run build:prod
EXPOSE 3000
CMD [ "node", "dist/main.js" ]


