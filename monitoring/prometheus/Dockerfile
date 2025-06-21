FROM prom/prometheus

COPY prometheus.yml /etc/prometheus/prometheus.yml

COPY alertrules.yml /etc/prometheus/alert.rules.yml

CMD ["--config.file=/etc/prometheus/prometheus.yml", "--web.console.libraries=/usr/share/prometheus/console_libraries", "--web.console.templates=/usr/share/prometheus/consoles"]
