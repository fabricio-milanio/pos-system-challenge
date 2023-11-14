FROM node:16.14-alpine

WORKDIR /app-backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

ENTRYPOINT [ "npm", "run", "dev" ]