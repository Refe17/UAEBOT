module.exports.run = (bot, message, args,) => {
    if (!message.member.voiceChannel) return message.voiceChannel.send("Please connect to a voice channel")
    if (!message.guild.me.voiceChannelID) return message.channel.send("Sorry, the bot isn't connected to the voice channel.");
    if (message.guild.me.voiceChannelID !== message.guild.me.voiceChannelID) return message.channel.send("Sorry, you aren't connected to a voice channel")
    message.guild.me.voiceChannel.leave();

message.channel.send('Leaving channel...')
}
module.exports.help = {
    name: "leave"
}
