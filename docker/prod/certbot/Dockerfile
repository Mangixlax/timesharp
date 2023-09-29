# Используйте базовый образ с Certbot
FROM certbot/certbot

# Создайте каталог для скрипта обновления сертификатов
RUN mkdir -p /scripts
WORKDIR /scripts

# Добавьте скрипт для автоматического обновления сертификатов
COPY renew-certificates.sh /scripts/
RUN chmod +x /scripts/renew-certificates.sh

# Добавьте задачи cron
RUN echo "0 0 1 * * /scripts/renew-certificates.sh" > /etc/crontabs/root

# Запустите cron в фоновом режиме
CMD ["crond", "-f"]
