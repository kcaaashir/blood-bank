FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8000

EXPOSE 8000

CMD ["nodemon", "start"]