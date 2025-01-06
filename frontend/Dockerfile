FROM node:14.16.0-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["yarn", "start"]