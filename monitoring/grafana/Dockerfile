FROM alpine:latest as userBuilder

ARG GROUP_ID
ARG GROUP_NAME
ARG USER_ID
ARG USER_NAME

RUN addgroup -g ${GROUP_ID} ${GROUP_NAME} && \
    adduser -u ${USER_ID} -G ${GROUP_NAME} -S ${USER_NAME}

FROM grafana/grafana:latest


COPY datasources.yaml /etc/grafana/provisioning/datasources/my-datasources.yaml


COPY 19908.json /etc/grafana/provisioning/dashboards/my-dashboard.json

COPY dashboards.yaml /etc/grafana/provisioning/dashboards/my-dashboards-provider.yaml

USER ${USER_NAME}

EXPOSE 3000

