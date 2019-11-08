FROM node:9.11-alpine

WORKDIR /app

RUN apk update && \
    apk add python make g++

ENV HOST 0.0.0.0
EXPOSE 3000