source /home/ec2-user/.bash_profile

cd /home/ec2-user/app

pm2 stop --silent app
pm2 delete --silent app