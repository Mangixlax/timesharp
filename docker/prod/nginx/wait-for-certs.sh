#!/bin/sh

while [ ! -f /etc/letsencrypt/live/timesharp.ru/fullchain.pem ] || [ ! -f /etc/letsencrypt/live/timesharp.ru/privkey.pem ]; do
  echo "Waiting for SSL certificates..."
  sleep 10
done

echo "SSL certificates found, starting nginx..."
exec nginx -g "daemon off;"
