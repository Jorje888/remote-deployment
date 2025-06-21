FROM alpine:latest as userBuilder

ARG GROUP_ID
ARG GROUP_NAME
ARG USER_ID
ARG USER_NAME

RUN addgroup -g ${GROUP_ID} ${GROUP_NAME} && \
    adduser -u ${USER_ID} -G ${GROUP_NAME} -S ${USER_NAME}

FROM node:22-alpine AS builder

WORKDIR /app


COPY package*.json ./
RUN npm install


COPY . . 
RUN npm run build


FROM nginx:1.27.5-alpine AS production

WORKDIR /app


COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
USER ${USER_NAME}

CMD ["nginx", "-g", "daemon off;"]




