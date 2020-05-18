/**
 * The anonymous function to call upon event trigger.
 *
 * @param {client}  client  discord.js.org/#/docs/main/stable/class/Client
 */
module.exports = client => {
  console.log(`Logged in as ${client.user.tag}!`);
}
