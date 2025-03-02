# Используем официальный Node.js образ с Alpine (легковесный)
FROM node:18-alpine as build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock)
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Собираем Angular приложение (включая SSR)
RUN npm run build

# Используем отдельный этап для запуска приложения
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только необходимые файлы из предыдущего этапа
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/package-lock.json ./package-lock.json

# Устанавливаем только production-зависимости
RUN npm install --production

# Открываем порт, на котором будет работать приложение
EXPOSE 4000

# Запускаем SSR-сервер
CMD ["npm", "run", "serve"]
