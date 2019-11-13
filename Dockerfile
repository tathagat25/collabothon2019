FROM node:6-alpine

ADD views /app/views
ADD ext /app/ext
ADD public /app/public
ADD scripts /app/scripts
ADD server /app/server
ADD src /app/src
ADD package.json /app
ADD server.js /app
ADD .env /app


RUN cd /app;yarn install; yarn run config;

ENV NODE_ENV production
ENV PORT 8080
EXPOSE 8080

WORKDIR "/app"
CMD [ "npm", "start"]