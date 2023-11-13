const { Client, GatewayIntentBits, Partials, Collection ,EmbedBuilder,ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	], 
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction, Partials.guildMemberAdd, ] 
});
const config = require('./config.js');
const fs = require("fs")
const express = require('express')
const app = express()

client.commands = new Collection()
client.aliases = new Collection()
client.slashCommands = new Collection();
client.buttons = new Collection();
client.config = config;
client.prefix = config.prefix;
let db ;
if(config.db_type == "mysql"){

 db = require('./db.js');


const pool = mysql.createPool({
	host: config.db.ip,
	user: config.db.hn,
	password: config.db.dp,
	database: config.db.dn
  });
  client.pool = pool;
}else if(config.db_type == "sqlite"){
	const { QuickDB } = require("quick.db");
 db = new QuickDB();

}

client.db = db;





module.exports = client;

fs.readdirSync('./handlers').forEach((handler) => {
  require(`./handlers/${handler}`)(client)
});


client.login(config.token)
var inforoute = require("./api/routes/info.js")
var show = require("./api/routes/show.js")

app.use("/", inforoute)
app.use("/image", show)

app.use((req, res, next) => {
    res.status(404).json({   
version:"v1",
    discord:"https://discord.gg/gV9XNvzcPp",
    developer:"aladdin",
    docs:config.docs});
});

app.use(express.json({ limit: "15mb" }));



app.listen(config.Port, async () => {


})

process.on('unhandledRejection', (reason, p) => {
})

process.on('uncaughtException', err => {
});
