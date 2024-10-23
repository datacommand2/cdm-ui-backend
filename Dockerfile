# FROM registry.datacommand.co.kr/node:v1.0.0
# FROM node:18.14.2-alpine
FROM registry.datacommand.co.kr/node:v2.0.4 as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

# 파일이 존재하면 쿠버네티스에서 초기 컨테이너 생성할 때 볼륨 마운트가 일어나지 않음
RUN mkdir -p /app/src/event-code && rm -rf /app/src/event-code/*

COPY . .

RUN yarn install --immutable
# RUN rm -rf package-lock.json

EXPOSE 8080

# CMD ["npm", "run", "start:prod"]
CMD ["yarn", "start:prod"]


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