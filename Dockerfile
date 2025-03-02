
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

RUN npm run build:ssr

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/package-lock.json ./package-lock.json

RUN npm install --production

EXPOSE 4200

CMD ["npm", "run", "serve:ssr"]
