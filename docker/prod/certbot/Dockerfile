FROM debian:jessie

# Установите необходимые зависимости
RUN apt-get update && apt-get install -y cron bash wget certbot

# Создайте каталог для скрипта обновления сертификатов
RUN mkdir -p /scripts
WORKDIR /scripts

# Добавьте скрипт для обновления сертификатов
COPY renew-certificates.sh /scripts/
RUN chmod +x /scripts/renew-certificates.sh

# Добавьте задачу cron для автоматического обновления сертификатов
RUN echo "0 0 1 * * root /scripts/renew-certificates.sh" >/etc/cron.d/renew-certificates

CMD [ "cron", "-f" ]