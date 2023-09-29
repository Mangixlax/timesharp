#!/bin/bash

# Обновление сертификатов с использованием certbot
certbot renew --quiet

# Перезапустите ваши службы, которые используют обновленные сертификаты (например, Nginx)
service nginx restart