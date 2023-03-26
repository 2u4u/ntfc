const express = require('express');
const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');

dotenv.config();

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const targetChatId = process.env.TELEGRAM_CHAT_ID;

const app = express();
const bot = new Telegraf(botToken);

// Start the bot
bot.launch();

// Middleware to parse JSON request bodies
app.use(express.json());


app.post('/api/send-message', async (req, res) => {
  try {
    const { message } = req.body;
    console.log('message', message)

    if (!message) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    await bot.telegram.sendMessage(targetChatId, message);

    res.status(200).json({ success: true, message: 'Message sent to Telegram bot' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to send message to Telegram bot' });
  }
});

// Schedule a notification at an exact time
// The cron format is 'minute hour day_of_month month day_of_week'
// For example, to send notifications at 9:00 AM and 9:00 PM, use '0 9,21 * * *'
const notificationCronExpression = '0 9,21 * * *';
cron.schedule(notificationCronExpression, () => {
  bot.telegram.sendMessage(targetChatId, 'I am still alive!')
    .catch((error) => {
      console.error('Failed to send alive notification:', error);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
