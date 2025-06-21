FROM prom/alertmanager

COPY alertmanager.yml /etc/alertmanager/alertmanager.yml

EXPOSE 9093

CMD ["--config.file=/etc/alertmanager/alertmanager.yml"]

# Ideally would not be used because the image has high-risk vulnerabilities.
# Unfortunately, secure images are not free. (Like the one on Chainguard) 