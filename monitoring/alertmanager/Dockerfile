FROM alpine:3.22.0 as userBuilder

ARG GROUP_ID
ARG GROUP_NAME
ARG USER_ID
ARG USER_NAME

RUN addgroup -g ${GROUP_ID} ${GROUP_NAME} && \
    adduser -u ${USER_ID} -G ${GROUP_NAME} -S ${USER_NAME}

FROM prom/alertmanager:v0.28.1

COPY alertmanager.yml /etc/alertmanager/alertmanager.yml

EXPOSE 9093

COPY --from=userBuilder /etc/passwd /etc/passwd
COPY --from=userBuilder /etc/group /etc/group

USER ${USER_NAME}

CMD ["--config.file=/etc/alertmanager/alertmanager.yml"]

# Ideally would not be used because the image has high-risk vulnerabilities.
# Unfortunately, secure images are not free. (Like the one on Chainguard) 