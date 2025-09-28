const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on(message("sticker"), (ctx) => console.log("hi"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.command("oldschool", (ctx) => ctx.reply("ha ha ha"));

bot.launch();
