const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Îmi pare rău, nu poți face asta.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Please Mention a User");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a Role");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't Find that role");

  if(!rMember.roles.has(gRole.id)) return message.reply("Ei nu au acel rol.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`The Role ${gRole.name} Have been successfully removed From You`)
    message.channel.send(`**DONE!** The Role ${gRole.name} Have been successfully removed From  <@${rMember.id}>`)
  }catch(e){
    console.log(e.stack);
  }
}

module.exports.help = {
  name: "rrole"
}