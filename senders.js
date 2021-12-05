const bot = require("./bot");
const data = require("./data");

const RESPONSE_MENU = data.menu;
const RESPONSE_FAQ = data.faq;

const messageMarkdown = {
  parse_mode: "Markdown",
};

const menuKeyboard = [
  [
    {
      text: RESPONSE_MENU.faq.question,
      callback_data: RESPONSE_MENU.faq.callback,
    },
    {
      text: RESPONSE_MENU.req.question,
      callback_data: RESPONSE_MENU.req.callback,
    },
  ],
  [
    {
      text: RESPONSE_MENU.contacts.question,
      callback_data: RESPONSE_MENU.contacts.callback,
    },
    {
      text: RESPONSE_MENU.help.question,
      callback_data: RESPONSE_MENU.help.callback,
    },
  ],
];

const faqKeyboard = [
  [
    {
      text: RESPONSE_FAQ.travel.question,
      callback_data: RESPONSE_FAQ.travel.callback,
    },
  ],
  [
    {
      text: RESPONSE_FAQ.health.question,
      callback_data: RESPONSE_FAQ.health.callback,
    },
    {
      text: RESPONSE_FAQ.nutrition.question,
      callback_data: RESPONSE_FAQ.nutrition.callback,
    },
  ],
  [
    {
      text: RESPONSE_FAQ.electricity.question,
      callback_data: RESPONSE_FAQ.electricity.callback,
    },
    {
      text: RESPONSE_FAQ.living.question,
      callback_data: RESPONSE_FAQ.living.callback,
    },
  ],
  [
    {
      text: RESPONSE_FAQ.contract.question,
      callback_data: RESPONSE_FAQ.contract.callback,
    },
  ],
  [
    {
      text: RESPONSE_FAQ.time.question,
      callback_data: RESPONSE_FAQ.time.callback,
    },
  ],
  [
    {
      text: RESPONSE_FAQ.enterContract.question,
      callback_data: RESPONSE_FAQ.enterContract.callback,
    },
  ],
  [
    {
      text: RESPONSE_FAQ.dispatch.question,
      callback_data: RESPONSE_FAQ.dispatch.callback,
    },
  ],
  [
    {
      text: RESPONSE_FAQ.waitForDispatch.question,
      callback_data: RESPONSE_FAQ.waitForDispatch.callback,
    },
  ],
  [
    {
      text: RESPONSE_FAQ.work.question,
      callback_data: RESPONSE_FAQ.work.callback,
    },
  ],
  [
    {
      text: RESPONSE_FAQ.report.question,
      callback_data: RESPONSE_FAQ.report.callback,
    },
  ],
];

function contacts(chatId) {
  bot.sendMessage(chatId, RESPONSE_MENU.contacts.response, messageMarkdown);
}

function help(chatId) {
  let msg = "Список команд бота:\n\n";
  for (const command of data.commands) {
    msg += "*/" + command.command + "* - " + command.description + "\n";
  }
  bot.sendMessage(chatId, msg, messageMarkdown);
}

function request(chatId) {
  for (const message of RESPONSE_MENU.req.response) {
    bot.sendMessage(chatId, message, messageMarkdown);
  }
}

function ping(chatId) {
  bot.sendMessage(chatId, "Pong");
}

function health(chatId) {
  bot.sendMessage(chatId, RESPONSE_FAQ.health.response, messageMarkdown);
}

function nutrition(chatId) {
  bot.sendMessage(chatId, RESPONSE_FAQ.nutrition.response, messageMarkdown);
}

function travel(chatId) {
  bot.sendMessage(chatId, RESPONSE_FAQ.travel.response, messageMarkdown);
}

function electricity(chatId) {
  bot.sendMessage(chatId, RESPONSE_FAQ.electricity.response, messageMarkdown);
}

function living(chatId) {
  bot.sendMessage(chatId, RESPONSE_FAQ.living.response, messageMarkdown);
}

function time(chatId) {
  bot.sendMessage(chatId, RESPONSE_FAQ.time.response, messageMarkdown);
}

function contract(chatId) {
  bot.sendMessage(chatId, RESPONSE_FAQ.contract.response, messageMarkdown);
  bot.sendDocument(
    chatId,
    "./Копия_Договор_о_волонтерской_деятельности_шаблон.pdf"
  );
}

function enterContract(chatId) {
  bot.sendMessage(chatId, RESPONSE_FAQ.enterContract.response, messageMarkdown);
}

function dispatch(chatId) {
  bot.sendMessage(chatId, RESPONSE_FAQ.dispatch.response, messageMarkdown);
}

function waitForDispatch(chatId) {
  bot.sendMessage(
    chatId,
    RESPONSE_FAQ.waitForDispatch.response,
    messageMarkdown
  );
}

function work(chatId) {
  bot.sendMessage(chatId, RESPONSE_FAQ.work.response, messageMarkdown);
}

function report(chatId) {
  bot.sendMessage(chatId, RESPONSE_FAQ.report.response, messageMarkdown);
}

function menu(chatId) {
  bot.sendMessage(chatId, "Меню", {
    reply_markup: {
      inline_keyboard: menuKeyboard,
    },
  });
}

function FAQ(chatId) {
  bot.sendMessage(chatId, "FAQ", {
    reply_markup: {
      inline_keyboard: faqKeyboard,
    },
  });
}

module.exports = {
  RESPONSE_MENU,
  RESPONSE_FAQ,

  contacts,
  contract,
  electricity,
  FAQ,
  health,
  help,
  living,
  menu,
  nutrition,
  ping,
  request,
  travel,
  time,
  enterContract,
  dispatch,
  waitForDispatch,
  work,
  report,
};
