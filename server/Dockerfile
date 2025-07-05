FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY prisma ./prisma/
COPY . .
RUN npx prisma generate
RUN npm run build
ENV NODE_ENV=production
CMD ["node", "dist/index.js"]
