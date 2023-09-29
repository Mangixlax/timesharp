FROM debian:buster

RUN apt-get update && apt-get install -y cron bash wget certbot

RUN mkdir -p /webroots/tols/.well-known /scripts

WORKDIR /scripts
COPY certbot-auto certbot-auto
RUN chmod a+x ./certbot-auto

VOLUME /webroots
VOLUME /etc/letsencrypt

RUN echo "0 0 1 * * root /usr/bin/certbot renew" >/etc/cron.d/certbot

CMD [ "cron", "-f" ]
