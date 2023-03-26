const express = require('express');
const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

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

    await bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, message);

    res.status(200).json({ success: true, message: 'Message sent to Telegram bot' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to send message to Telegram bot' });
  }
});

app.post('/api/test', async (req, res) => {
    try {
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ error: 'Failed to test Telegram bot' });
    }
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
