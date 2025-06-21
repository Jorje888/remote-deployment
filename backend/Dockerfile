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


FROM node:22-alpine AS production

COPY --from=userBuilder /etc/passwd /etc/passwd
COPY --from=userBuilder /etc/group /etc/group

WORKDIR /app


COPY --from=builder /app/dist ./dist
 
EXPOSE 3001

USER ${USER_NAME}
CMD ["node", "./dist/app.js"]
