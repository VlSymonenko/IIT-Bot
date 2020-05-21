const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
let IaId = '';
// Create a bot sdfthat uses 'polling' to fetch new updates
console.log('argsdd',process.argv[2]);

const token = '1131189638:AAE9WKvFgxLvNlKHINzo25E7uJ_L_HOSdyg';
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
IaId = chatId;
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, '1');
});
const envs = {};
// setInterval( ()=> IaId !== '' && bot.sendMessage(IaId, '1'),5000);