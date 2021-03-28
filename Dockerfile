FROM node:14

ENV PORT 8080 \
    NODE_ENV production

WORKDIR /app
COPY . .
RUN npm install \
    && npm build

EXPOSE $PORT

CMD node server.js
