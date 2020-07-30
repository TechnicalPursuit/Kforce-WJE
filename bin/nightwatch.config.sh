#!/usr/bin/env bash
set -e

rm -f ./selenium-server-standalone-3.9.1.jar chromedriver_mac64.zip chromedriver

curl "http://selenium-release.storage.googleapis.com/3.9/selenium-server-standalone-3.9.1.jar" > ./selenium-server-standalone-3.9.1.jar

curl "https://chromedriver.storage.googleapis.com/2.41/chromedriver_mac64.zip" > ./chromedriver_mac64.zip

unzip chromedriver_mac64.zip
rm -f chromedriver_mac64.zip

pwd
ls -la
