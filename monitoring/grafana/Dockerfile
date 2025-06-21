FROM grafana/grafana:latest


COPY datasources.yaml /etc/grafana/provisioning/datasources/my-datasources.yaml


COPY 19908.json /etc/grafana/provisioning/dashboards/my-dashboard.json

COPY dashboards.yaml /etc/grafana/provisioning/dashboards/my-dashboards-provider.yaml

EXPOSE 3000

