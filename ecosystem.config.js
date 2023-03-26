module.exports = {
  apps: [{
    name: 'ntfc-app',
    script: 'server.js',
    env_production: {
      PORT: 5001,
      NODE_ENV: "production",
      TELEGRAM_BOT_TOKEN: [TELEGRAM_BOT_TOKEN],
      TELEGRAM_CHAT_ID: [TELEGRAM_CHAT_ID],
    }
  }],
};
