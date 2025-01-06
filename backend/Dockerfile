FROM node:14.13.0-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN npm run build

EXPOSE 5432

CMD ["yarn", "start"]