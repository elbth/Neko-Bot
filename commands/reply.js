const discord = require("discord.js");

/**
 * The anonymous function to call when replying to messages.
 * https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=reply
 *
 * @param {Message} message discord.js.org/#/docs/main/stable/class/Message
 */
module.exports = (client, message) => {
    if (message.content === "ping") {
        message.channel.send("Client id: " + client.user.id)
        message.channel.send("Message author: " + message.author)
        message.channel.send("User: " + client.user.username)
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
}
