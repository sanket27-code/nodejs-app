FROM node:12-alpine

WORKDIR /app/nodejs-app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD [ "node", "index.js" ]
