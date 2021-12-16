cd /var/www/html
git clone $GITURL sui
shopt -s dotglob
mv sui/* .
rm -rf sui
echo "pulled update"

# Copy hello-cron file to the cron.d directory
cp sui-cron /etc/cron.d/sui-cron

# Give execution rights on the cron job
chmod 0644 /etc/cron.d/sui-cron

# set pull script permissions
chmod +x gitpull.sh

# Apply cron job
crontab /etc/cron.d/sui-cron

# Create the log file to be able to run tail
touch /var/log/cron.log

# configure nginx
echo "daemon off;" >> /etc/nginx/nginx.conf
