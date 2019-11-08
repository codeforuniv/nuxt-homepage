FROM node:10.17.0-alpine

WORKDIR /app

RUN apk update && \
    apk add python make g++

ENV HOST 0.0.0.0
EXPOSE 3000