const TelegramBot = require("node-telegram-bot-api");
const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

console.log("Bot has started");

module.exports = bot;
