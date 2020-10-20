require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

var cron = require("cron");

const MIN_INTERVAL = 5 ;

bot.login(TOKEN);

let job2 = new cron.CronJob('07 10 08 * * 1-5', sendMessage); 
bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  job2.start();
});


bot.on('message', msg => {
  //let channel = message.guild.channels.cache.get(c => c.name === 'Covid-19 games')
  if (msg.content === 'logs') {
    msg.channel.send('los loooooooogs');
  }
  if (msg.content === 'en verdad') {
    msg.reply('en verdaaaaaaad');
  }
  if (msg.content === 'el agu') {
    if (msg.content === 'hola') {
      msg.reply('Holis');
    }else {

      msg.reply('seguro');
      msg.channel.send('estoy a full despues hablamos');
    }
    //msg.reply('estoy a full despues hablamos');
    // console.log(bot.servers);
    // // bot.channels.get("Covid-19 games").send("Hello World!")
    // msg.channel.send('pong');

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
});

function sendMessage(){
  bot.channels.find("name","portal-general").send("Buen dia a todos");
  bot.channels.find("name","portal-general").send("Me hago un mate y arranco a full");
  //bot.channels.get("Covid-19 games").send("Hola me pongo a laburar")

}
