// modules to include
const reply = require("../commands/reply");

/**
 * The anonymous function to call upon event trigger.
 *
 * @param {client}  client  discord.js.org/#/docs/main/stable/class/Client
 * @param {Message} message discord.js.org/#/docs/main/stable/class/Message
 */
module.exports = (client, message) => {
    return reply(client, message);
}
