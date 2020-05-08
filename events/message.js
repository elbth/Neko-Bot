const reply = require("../commands/reply")

module.exports = (client, message) => {
  if (message.content === "ping") {
    console.log(message.content)
    return reply(message)
  }
}
