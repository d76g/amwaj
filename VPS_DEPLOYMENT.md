# VPS Server Deployment Guide

This guide will help you deploy the AMWAJ COMMODITIES website to a VPS server.

## Prerequisites

- Ubuntu 20.04+ or similar Linux distribution
- Root or sudo access
- Domain name (optional but recommended)
- SSH access to your VPS

## Step 1: Server Setup

### 1.1 Update System Packages

```bash
sudo apt update && sudo apt upgrade -y
```

### 1.2 Install Node.js

```bash
# Install Node.js 20.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version
npm --version
```

### 1.3 Install PM2 (Process Manager)

```bash
sudo npm install -g pm2
```

### 1.4 Install Nginx (Reverse Proxy)

```bash
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

### 1.5 Install Certbot (for SSL)

```bash
sudo apt install -y certbot python3-certbot-nginx
```

## Step 2: Application Deployment

### 2.1 Clone Repository

```bash
# Navigate to your preferred directory
cd /var/www

# Clone your repository
git clone <your-repository-url> amwaj
cd amwaj
```

### 2.2 Install Dependencies

```bash
npm install
```

### 2.3 Build Application

```bash
npm run build
```

This will create the `.output` directory with the production build.

### 2.4 Create Logs Directory

```bash
mkdir -p logs
```

## Step 3: Configure PM2

### 3.1 Start Application with PM2

```bash
pm2 start ecosystem.config.cjs
```

### 3.2 Save PM2 Configuration

```bash
pm2 save
pm2 startup
# Follow the instructions shown to enable PM2 on system startup
```

### 3.3 Useful PM2 Commands

```bash
# View application status
pm2 status

# View logs
pm2 logs amwaj

# Restart application
pm2 restart amwaj

# Stop application
pm2 stop amwaj

# Monitor application
pm2 monit
```

## Step 4: Configure Nginx

### 4.1 Create Nginx Configuration

Create a new configuration file:

```bash
sudo nano /etc/nginx/sites-available/amwaj
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name t9dev.cloud www.t9dev.cloud;

    # Redirect HTTP to HTTPS (after SSL setup)
    # return 301 https://$server_name$request_uri;

    # For initial setup, use this:
    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Increase timeouts for long-running requests
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
}
```

### 4.2 Enable Site

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/amwaj /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

## Step 5: Setup SSL Certificate (Let's Encrypt)

### 5.1 Obtain SSL Certificate

```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Follow the prompts to complete the SSL setup.

### 5.2 Auto-renewal

Certbot automatically sets up a cron job for renewal. Verify it:

```bash
sudo certbot renew --dry-run
```

## Step 6: Firewall Configuration

### 6.1 Configure UFW (Uncomplicated Firewall)

```bash
# Allow SSH
sudo ufw allow 22/tcp

# Allow HTTP
sudo ufw allow 80/tcp

# Allow HTTPS
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

## Step 7: Environment Variables

### 7.1 Create Environment File

If your application needs environment variables, create a `.env` file:

```bash
nano .env
```

Add your environment variables:

```env
NODE_ENV=production
PORT=3001
# Add other environment variables as needed
```

### 7.2 Update PM2 to Use Environment File

You can modify `ecosystem.config.cjs` to load environment variables:

```javascript
module.exports = {
  apps: [
    {
      name: 'amwaj',
      script: '.output/server/index.mjs',
      instances: 1,
      exec_mode: 'cluster',
      env_file: '.env', // Add this line
      // ... rest of config
    }
  ]
}
```

## Step 8: Monitoring and Maintenance

### 8.1 Setup Log Rotation

PM2 has built-in log rotation. Configure it:

```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
pm2 set pm2-logrotate:compress true
```

### 8.2 Monitor Application Health

```bash
# Check application status
pm2 status

# View real-time logs
pm2 logs amwaj --lines 100

# Monitor resources
pm2 monit
```

## Step 9: Updating the Application

### 9.1 Update Process

```bash
# Navigate to application directory
cd /var/www/amwaj

# Pull latest changes
git pull origin main

# Install new dependencies (if any)
npm install

# Rebuild application
npm run build

# Restart application
pm2 restart amwaj
```

## Step 10: Troubleshooting

### 10.1 Check Application Logs

```bash
# PM2 logs
pm2 logs amwaj

# Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# System logs
sudo journalctl -u nginx -f
```

### 10.2 Check Port Status

```bash
# Check if port 3001 is listening
sudo netstat -tlnp | grep 3001

# Or using ss
sudo ss -tlnp | grep 3001
```

### 10.3 Restart Services

```bash
# Restart PM2 application
pm2 restart amwaj

# Restart Nginx
sudo systemctl restart nginx

# Check Nginx status
sudo systemctl status nginx
```

## Step 11: Performance Optimization

### 11.1 Enable Gzip Compression in Nginx

Edit `/etc/nginx/nginx.conf` and ensure gzip is enabled:

```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript;
```

### 11.2 Configure PM2 Cluster Mode

For better performance, you can run multiple instances. Update `ecosystem.config.cjs`:

```javascript
module.exports = {
  apps: [
    {
      name: 'amwaj',
      script: '.output/server/index.mjs',
      instances: 'max', // Use all CPU cores
      exec_mode: 'cluster',
      // ... rest of config
    }
  ]
}
```

## Step 12: Backup Strategy

### 12.1 Backup Application Files

```bash
# Create backup script
nano /usr/local/bin/backup-amwaj.sh
```

Add:

```bash
#!/bin/bash
BACKUP_DIR="/backups/amwaj"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/amwaj_$DATE.tar.gz /var/www/amwaj
find $BACKUP_DIR -name "amwaj_*.tar.gz" -mtime +7 -delete
```

Make it executable:

```bash
sudo chmod +x /usr/local/bin/backup-amwaj.sh
```

### 12.2 Setup Cron Job for Backups

```bash
sudo crontab -e
```

Add:

```
0 2 * * * /usr/local/bin/backup-amwaj.sh
```

## Security Checklist

- [ ] Firewall configured (UFW)
- [ ] SSH key authentication enabled
- [ ] SSL certificate installed
- [ ] Regular security updates enabled
- [ ] Strong passwords or SSH keys only
- [ ] PM2 running as non-root user (recommended)
- [ ] Nginx configured with security headers
- [ ] Regular backups configured

## Additional Nginx Security Headers

Add to your Nginx configuration:

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
```

## Quick Reference Commands

```bash
# Application
pm2 start ecosystem.config.cjs
pm2 restart amwaj
pm2 stop amwaj
pm2 logs amwaj
pm2 status

# Nginx
sudo systemctl restart nginx
sudo nginx -t
sudo systemctl status nginx

# SSL
sudo certbot renew
sudo certbot certificates

# System
sudo apt update && sudo apt upgrade -y
sudo reboot
```

## Support

For issues or questions:
- Check PM2 logs: `pm2 logs amwaj`
- Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
- Check system resources: `htop` or `pm2 monit`

