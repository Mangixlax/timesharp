FROM debian:jessie

RUN apt-get update && apt-get install -y cron bash wget
RUN mkdir -p /webroots/tols/.well-known /scripts

WORKDIR /scripts
COPY certbot-auto certbot-auto
RUN chmod a+x ./certbot-auto
RUN /scripts/certbot-auto -n certificates
COPY register /scripts/
RUN chmod +x /scripts/register

VOLUME /webroots
VOLUME /etc/letsencrypt
RUN echo "0 0 1 * * root /scripts/certbot-auto renew" >/etc/cron.d/certbot

CMD [ "cron", "-f" ]