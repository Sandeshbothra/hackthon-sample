FROM node:12.18.1 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . ./
CMD [ "npm","start" ]

