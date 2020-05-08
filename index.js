require("dotenv").config()
const fs = require("fs")
const path = require("path")
const Discord = require("discord.js")
const client = new Discord.Client()

fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = path.parse(file).name
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})

client.login(process.env.BOT_TOKEN)
