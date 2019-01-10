const Discord = require('discord.js')js;
const client = new Discord.Client();

client.on('message', message=> {
    if (message.content.startsWith('!ping')){
        message.channel.send('pong!');
    )
});

client.login(config.token)
