const Discord = require ('discord.js');
const client = new Discord.Client();

const token = process.env.arcadia

client.on('ready', () =>{
console.log('CuCu is now online!')
});

const prefix = "+"
client.on ("message", (message) => {

    msg = message.content.toLowerCase();

    if(message.author.bot) return

    mention = message.mentions.users.first();

    if(msg.startsWith (prefix + "send")) {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage);
        message.channel.send ("The Broadcast Wast Sent!")
    }
})
client.login(process.env.token);
