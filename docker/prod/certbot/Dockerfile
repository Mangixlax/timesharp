# Используйте базовый образ Debian Buster
FROM debian:buster

# Установите необходимые пакеты
RUN apt-get update && apt-get install -y cron certbot nano 

# Создайте каталог для скрипта обновления сертификатов
RUN mkdir -p /scripts
WORKDIR /scripts

# Добавьте скрипт для автоматического обновления сертификатов
COPY renew-certificates.sh /scripts/
RUN chmod +x /scripts/renew-certificates.sh

# Добавьте задачи cron в другую директорию
RUN echo "0 0 1 * * /scripts/renew-certificates.sh" > /var/spool/cron/crontabs/root

# Запустите cron в фоновом режиме
CMD ["cron", "-f"]