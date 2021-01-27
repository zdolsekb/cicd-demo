#!/bin/bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

killall node

export app_root=/home/ec2-user/app
if [ -d "$app_root" ];then
    rm -rf /home/ec2-user/app
    mkdir -p /home/ec2-user/app
else
    mkdir -p /home/ec2-user/app
fi