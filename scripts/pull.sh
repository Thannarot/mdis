#!/bin/sh

cd /home/mdis
git reset --hard HEAD
git pull
gulp build
