const Discord = require("discord.js");

module.exports.run = async (_client, message) => {
    fetch("https://nekobot.xyz/api/image?type=neko").then((res) => res.json()).then((body) => {
        const embed = new Discord.MessageEmbed()
        .setColor(body.color)
        .setImage(body.message);
        message.channel.send(embed);
    }).catch(() => message.channel.send("❎ **Błąd API!**"));
};

module.exports.help = {
    name: "neko"
};