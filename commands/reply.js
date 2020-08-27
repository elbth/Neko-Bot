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
    // if user does not exist, make exist
    db.get("SELECT UserId FROM User WHERE UserId = ?", [client.user.id], (err, row) => {
        if (err) throw err;
        if (row === undefined) {
            // 4 is the menu ID
            db.run("INSERT INTO User (UserId, LocationId, TotalFish) VALUES (?, 4, 100)", [client.user.id], (err) => {
                if (err) throw err;
            });
        }
    });

    // parse message
    switch (message.content) {
        case "ping":
            message.channel.send("Client id: " + client.user.id);
            message.channel.send("Message author: " + message.author);
            message.channel.send("User: " + client.user.username);
            break;
        case "tubbs":
            const exampleEmbed = new discord.MessageEmbed()
                .setTitle('Some title')
                .attachFiles(['./images/tubbs.png'])
                .setThumbnail('attachment://tubbs.png');
            message.channel.send(exampleEmbed);
            break;
        case "options":
            message.channel.send("1. yard \n2. store \n3. cat album");
            break;
        case "store":
            // update location, send >:[ if already there
            // 1 is the store ID
            db.run("UPDATE User SET LocationId = 1 WHERE UserId = ?", [client.user.id], (err) => {
                if (err) throw err;
            });
            // print all available items in store
            db.all("SELECT * FROM Item", (err, rows) => {
                if (err) throw err;
                let allItem = [];
                rows.forEach(row => {
                    allItem.push(row.Name + ' ' + row.Price);
                });
                message.channel.send(allItem);
            });
            break;
        case "yard":
            // update location, send >:[ if already there
            // 2 is the yard ID
            db.run("UPDATE User SET LocationId = 2 WHERE UserId = ?", [client.user.id], (err) => {
                if (err) throw err;
            });
            db.all("SELECT * FROM YardItem", (err, rows) => {
                if (err) throw err;
                console.log(rows);
            });

            db.all("SELECT * FROM YardCat", (err, rows) => {
                if (err) throw err;
                console.log(rows);
            });
        case "cat album":
            // update location, send >:[ if already there
            // 3 is the cat album ID
            db.run("UPDATE User SET LocationId = 3 WHERE UserId = ?", [client.user.id], (err) => {
                if (err) throw err;
            });
            db.all("SELECT Cat.Name AS catName, Item.Name AS itemName, Visits FROM Cat INNER JOIN Item ON Cat.ItemId = Item.ItemId WHERE Visits > 0", (err, rows) => {
                if (err) throw err;
                let allCat = [];
                rows.forEach(row => {
                    console.log(row);
                    allCat.push(row.catName + ' had fun with ' + row.itemName);
                });
                message.channel.send(allCat);
            });
        default:
            break;
    }
}
