# FROM registry.datacommand.co.kr/node:v1.0.0
FROM node:18.14.2-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install
RUN rm -rf package-lock.json

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]
