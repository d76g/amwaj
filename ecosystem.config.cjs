module.exports = {
  apps: [
    {
      name: 'amwaj',
      script: '.output/server/index.mjs',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
        NITRO_PORT: 3001,
        HOST: '0.0.0.0'
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_file: './logs/pm2-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      merge_logs: true
    }
  ]
}

