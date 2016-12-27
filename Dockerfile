FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY . /usr/src/app
RUN npm install

CMD ["npm", "start"]