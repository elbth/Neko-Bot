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
  message.channel.send({files: ["./images/tubbs.png"]})
  }
}
