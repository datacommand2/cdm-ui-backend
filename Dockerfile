# FROM registry.datacommand.co.kr/node:v1.0.0
FROM node:18.14.2-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install
RUN rm -rf package-lock.json

# RUN npm install react-scripts@3.2.0 -g
#RUN apk add --no-cache git

COPY . .

EXPOSE 8080

# CMD ["npm", "run", "start"]
CMD ["node", "server.js"]


# FROM registry.datacommand.co.kr/node:14.19.0-alpine

# WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

# # npm install을 위해서 package.json을 미리 복사한다.
# COPY package*.json ./


# RUN npm install
# # RUN npm install react-scripts@3.2.0 -g
# #RUN apk add --no-cache git

# COPY . .

# EXPOSE 8080

# # CMD ["npm", "run", "start"]
# CMD ["npm", "start"]