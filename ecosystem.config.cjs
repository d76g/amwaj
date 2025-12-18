module.exports = {
  apps: [
    {
      name: 'amwaj',
      script: '.output/server/index.mjs',
      exec_mode: 'fork',

      env: {
        NODE_ENV: 'production',
        NITRO_PORT: 3001,
        NITRO_HOST: '0.0.0.0'
      },

      error_file: './logs/error.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,

      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    }
  ]
}