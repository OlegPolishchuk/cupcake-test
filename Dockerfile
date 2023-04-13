FROM node:alpine

WORKDIR /app

EXPOSE 3030

COPY package*.json .

RUN yarn

COPY . .

CMD ["yarn", "dev"]

