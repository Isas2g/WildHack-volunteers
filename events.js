module.exports = (bot) => {
  const senders = require("./senders");

  const { RESPONSE_MENU, RESPONSE_FAQ } = senders;

  const commands = require("./data").commands;
  bot.setMyCommands(commands);

  bot.onText(/\/start/, (msg) => {
    senders.menu(msg.chat.id);
  });

  bot.onText(/\/menu/, (msg) => {
    senders.menu(msg.chat.id);
  });

  bot.onText(/\/ping/, (msg) => {
    senders.ping(msg.chat.id);
  });

  bot.onText(/\/request/, (msg) => {
    senders.request(msg.chat.id);
  });

  bot.onText(/\/help/, (msg) => {
    senders.help(msg.chat.id);
  });

  bot.onText(/\/contacts/, (msg) => {
    senders.contacts(msg.chat.id);
  });

  bot.onText(/\/faq/, (msg) => {
    senders.FAQ(msg.chat.id);
  });

  // Handle keyboard menu
  bot.on("callback_query", async (q) => {
    const {
      message: { chat },
    } = q;

    switch (q.data) {
      case RESPONSE_MENU.contacts.callback:
        senders.contacts(chat.id);
        break;
      case RESPONSE_MENU.req.callback:
        senders.request(chat.id);
        break;
      case RESPONSE_MENU.faq.callback:
        senders.FAQ(chat.id);
        break;
      case RESPONSE_MENU.help.callback:
        senders.help(chat.id);
        break;
      case RESPONSE_FAQ.health.callback:
        senders.health(chat.id);
        break;
      case RESPONSE_FAQ.nutrition.callback:
        senders.nutrition(chat.id);
        break;
      case RESPONSE_FAQ.travel.callback:
        senders.travel(chat.id);
        break;
      case RESPONSE_FAQ.electricity.callback:
        senders.electricity(chat.id);
        break;
      case RESPONSE_FAQ.living.callback:
        senders.living(chat.id);
        break;
      case RESPONSE_FAQ.contract.callback:
        senders.contract(chat.id);
        break;
      case RESPONSE_FAQ.time.callback:
        senders.time(chat.id);
        break;
      case RESPONSE_FAQ.enterContract.callback:
        senders.enterContract(chat.id);
        break;
      case RESPONSE_FAQ.dispatch.callback:
        senders.dispatch(chat.id);
        break;
      case RESPONSE_FAQ.waitForDispatch.callback:
        senders.waitForDispatch(chat.id);
        break;
      case RESPONSE_FAQ.work.callback:
        senders.work(chat.id);
        break;
      case RESPONSE_FAQ.report.callback:
        senders.report(chat.id);
        break;
      default:
        break;
    }
    bot.answerCallbackQuery(q.id);
  });
};
