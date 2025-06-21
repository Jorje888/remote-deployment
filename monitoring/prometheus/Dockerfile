FROM alpine:3.22.0 as userBuilder

ARG GROUP_ID
ARG GROUP_NAME
ARG USER_ID
ARG USER_NAME

RUN addgroup -g ${GROUP_ID} ${GROUP_NAME} && \
    adduser -u ${USER_ID} -G ${GROUP_NAME} -S ${USER_NAME}

FROM prom/prometheus:v3.4.1
COPY prometheus.yml /etc/prometheus/prometheus.yml

COPY alertrules.yml /etc/prometheus/alert.rules.yml

COPY --from=userBuilder /etc/passwd /etc/passwd
COPY --from=userBuilder /etc/group /etc/group

USER ${USER_NAME}

CMD ["--config.file=/etc/prometheus/prometheus.yml", "--web.console.libraries=/usr/share/prometheus/console_libraries", "--web.console.templates=/usr/share/prometheus/consoles","--log.level=debug"]

