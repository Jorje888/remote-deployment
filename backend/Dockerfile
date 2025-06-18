FROM node:22-alpine AS builder

WORKDIR /app


COPY package*.json ./
RUN npm install

COPY . . 
RUN npm run build

# Stage 2: Run the application in a lightweight environment
FROM node:22-alpine AS production

WORKDIR /app


COPY --from=builder /app/dist ./dist
 
# Expose the port your application listens on
EXPOSE 3001


CMD ["node", "./dist/app.js"]
