const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = "-"


client.on("ready", () => {
   console.log("Estoy listo!");
});

client.on("message", (message) => {
  if(message.content.startsWith("Brawl")) {
    message.channel.send("Stars ESP");
  }
  if(message.content.startsWith(prefix+"help")) {
    message.channel.send(" **Bot de Brawl Stars** :white_check_mark: \n -El prefijo es `-` \n \n **----------Comandos----------** \n `-help`= informacion sobre el bot \n `-link`= link del server de la comunidad de Brawl Stars ESP \n \n **https://discord.gg/9KQFYE7**");
  }
if (message.content.startsWith(prefix +"link")){
  message.channel.send({embed: {
    color: 0xF70808,
    description: "`Link de la comunidad de el Bot` **https://discord.gg/9KQFYE7** "
  }});
}
      
});


client.login("NTE2MzY0OTc4MDQzNzQ4MzUy.DtymGQ.76sA0UEoslMHLDWE9Lx1Esn4xSc");
