const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  PermissionsBitField,
  ButtonBuilder,
  ButtonStyle,
  userMention,
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ModalSubmitInteraction,
  permissionOverwrites
} = require("discord.js");

const client = new Client({
  intents: 131071,
});

const prefix = "+"; // البريفكس

client.on("ready", async() => {
  console.log(`Logged in as ${client.user.tag}!
    Index.js  ✅
    `);
  client.user.setActivity("General Progs ON TOP", { type: 3 });
  client.user.setStatus("idle");
});

//====================================== جميع الاكواد هنا ===================================================//

let feedbackRoom = "1168644169028358296"
let line = "https://media.discordapp.net/attachments/1132976423943028798/1186387784810897478/General_Progs_Line_GIF_18B3A4E.gif?ex=65aec039&is=659c4b39&hm=dd9ccb80110b94033774656370cc98427e5054472d67c5621bab37f44ceda13d&="

let suggestionRoom = "1168644291967602789"

let taxRoom = "1168647574106943600"

client.on("messageCreate" , async(message) => {
  if(message.author.bot)return;
  if(message.channelId == feedbackRoom && message.channel.type == 0){
    let embed = new EmbedBuilder()
    .setAuthor({name : message.guild.name , iconURL : message.guild.iconURL({dynamic : true})})
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .setDescription(`** > ${message.content}**`)
    .setColor('Random');
  await message.delete();
  let theMsg = await message.channel.send({content : `شكرا لمشاركتنا رأيك :tulip: <@${message.author.id}>` , embeds : [embed]})
  await theMsg.react('❤️')
  await theMsg.react('❤️‍🔥')
  await message.channel.send(`${line}`);
  }else   if(message.channelId == suggestionRoom && message.channel.type == 0){
    let embed = new EmbedBuilder()
    .setAuthor({name : message.guild.name , iconURL : message.guild.iconURL({dynamic : true})})
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .setDescription(`** > ${message.content}**`)
    .setColor('Random');
  await message.delete();
  let theMsg = await message.channel.send({content : `شكرا لمشاركتنا اقتراحك :tulip: <@${message.author.id}>` , embeds : [embed]})
  await theMsg.react('✅')
  await theMsg.react('❌')
  await message.channel.send(`${line}`);
  }else   if(message.channelId == taxRoom && message.channel.type == 0){
    var args = message.content.split(' ').slice(0).join(' ')
    if(!args) return await message.delete();
      
    if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
    else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
    else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
    else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    
    let embed = new EmbedBuilder()
    .setAuthor({name : message.guild.name , iconURL : message.guild.iconURL({dynamic : true})})
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .setDescription(`** - الضريبة : \n> ${tax2}\n- المبلغ بالضريبة : \n> ${tax}**`)
    .setColor('Random');

  await message.reply({embeds : [embed]})
  await message.channel.send(`${line}`);
  }
})


//===================================== جميع الاكواد هنا ====================================================//
client.login("MTAzMTU3NzQ0MjQ5NTc3ODg0Ng.GaDMHi.a4m8ciyzhPW_9wVKRNU-YCLjU0G2GsQ_JXG50c"); // توكن البوت 
