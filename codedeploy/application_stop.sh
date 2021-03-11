source /home/ec2-user/.bash_profile

cd /home/ec2-user/app

if pgrep app.js; then pm2 stop app.js; fi