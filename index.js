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

let feedbackRoom = "" // ايدي روم الفيدباك - الاراء
let line = "" // رابط الخط

let suggestionRoom = "" // ايدي روم الاقتراحات

let taxRoom = "" // ايدي روم الضريبة

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
client.login(""); // توكن البوت 
