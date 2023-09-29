# Используйте базовый образ с Certbot
FROM certbot/certbot

# Создайте каталог для скрипта обновления сертификатов
RUN mkdir -p /scripts
WORKDIR /scripts

# Добавьте скрипт для автоматического обновления сертификатов
COPY renew-certificates.sh /scripts/
RUN chmod +x /scripts/renew-certificates.sh

# Добавьте задачу cron для автоматического обновления сертификатов при запуске контейнера
RUN echo "@reboot /scripts/renew-certificates.sh" >> /etc/crontabs/root

# Запустите cron в фоновом режиме
CMD ["crond", "-f"]