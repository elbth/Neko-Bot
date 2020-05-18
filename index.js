// dotenv used for storing bot token
require("dotenv").config();

// modules to include
const fs = require("fs");
const path = require("path");
const discord = require("discord.js");

// init commands for bot
const client = new discord.Client();
client.login(process.env.BOT_TOKEN);

// parse through all event listeners in the "events" directory
// all possible events: https://discord.js.org/#/docs/main/stable/class/Client
fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`);
    const eventName = path.parse(file).name;

    // on [eventName], run the file's anonymous function (module.exports)
    client.on(eventName, (...args) => eventHandler(client, ...args));
  });
});
