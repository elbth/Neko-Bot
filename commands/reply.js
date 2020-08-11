const discord = require("discord.js");
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('neko.db3');

/**
 * The anonymous function to call when replying to messages.
 * https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=reply
 *
 * @param {Message} message discord.js.org/#/docs/main/stable/class/Message
 */
module.exports = (client, message) => {
    if (message.content === "ping") {
        message.channel.send("Client id: " + client.user.id);
        message.channel.send("Message author: " + message.author);
        message.channel.send("User: " + client.user.username);
    }
    if (message.content === "tubbs") {
        const exampleEmbed = new discord.MessageEmbed()
            .setTitle('Some title')
            .attachFiles(['./images/tubbs.png'])
            .setThumbnail('attachment://tubbs.png');
        message.channel.send(exampleEmbed);
    }
    if (message.content === "options") {
        message.channel.send("1. yard \n2. store \n3. cat album");
    }
    if (message.content === "store") {
        db.all("SELECT * FROM Item", (err, rows) => {
            if (err) throw err;
            let allItem = [];
            rows.forEach(row => {
                allItem.push(row.Name + ' ' + row.Price);
            });
            message.channel.send(allItem);
        });
    }
}
