#!/bin/sh

# Request or renew the SSL certificate
certbot certonly --webroot -w /var/www/html/backend -d timesharp.ru -n --agree-tos --email info@timesharp.ru || true

# Set up a cron job to renew the certificate automatically
echo "0 0,12 * * * root certbot renew --webroot -w /var/www/html/backend --post-hook 'nginx -s reload' > /dev/null 2>&1" | crontab -

# Start the cron daemon and Nginx in the foreground
crond && nginx -g "daemon off;"
