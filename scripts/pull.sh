#!/bin/sh

cd /home/mdis
git reset --hard HEAD
git pull
gulp build
sudo systemctl restart nginx
pm2 restart server
