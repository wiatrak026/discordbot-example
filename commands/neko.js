const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (_client, message) => {
    fetch("https://nekobot.xyz/api/image?type=neko").then((res) => res.json()).then((body) => {
        const embed = new Discord.MessageEmbed()
        .setColor(body.color)
        .setImage(body.message);
        message.channel.send(embed);
    }).catch(() => message.channel.send("❎ Błąd API! Spróbuj ponownie."));
};

module.exports.help = {
    name: "neko"
};