// Load env variables from .env file
require("dotenv").config();

// Remove deprecated message on start
process.env.NTBA_FIX_319 = 1;

const bot = require("./bot");
const initBot = require("./events");

initBot(bot);
