const Discord = require('discord.js');
const config = require("./config.json");

const bot = new Discord.Client({
    intents: [
        "GUILDS", "GUILD_MESSAGES"
    ]
});

bot.login(config.token)

bot.on('ready', () => {
    console.log('la conextion résusie entre discord et le bot yobot')
});

bot.on("messageCreate", async message => {
    if (message.content === config.prefix + "ping") {
        message.reply(`la latence du bot est de ${bot.ws.ping}ms`)
    }
});