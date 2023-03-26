# Telegram bot which notifies when something sent to API

This is a simple Telegram bot which notifies when something sent to API.

## Installation

1. Clone this repository.
2. Replace ```YOUR_BOT_TOKEN``` with your Telegram bot token. You can obtain this token by creating a new bot through the BotFather on Telegram. For more information, visit https://core.telegram.org/bots#botfather.
3. Replace ```YOUR_CHAT_ID``` with the desired chat ID where the bot should send messages. You can obtain the chat ID by sending a message to your bot and checking the chat.id property in the update received by the bot.
or 
Navigate to https://api.telegram.org/bot[YOUR_BOT_TOKEN]/getUpdates and check the chat.id property in the update received by the bot.
4. Run the application using the command ```npm run dev```.
5. Now, you can make a POST request to http://localhost:3000/api/sendMessage with a JSON payload containing a "message" property to send a message to the Telegram bot.
```
{
  "message": "Hello from the API!"
}

```
6. Now you can send requests using cURL. For example logs from your CI/CD pipeline.
```curl -X POST -H "Content-Type: application/json" -d '{"message": "Error occured here ..."}' http://your-api-url/api/send-message```
