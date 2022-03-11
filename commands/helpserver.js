module.exports.config = { 
  
    
    name: 'helpserver', 
    aliases: [], 
    group: 'misc', 
    description: 'Sends the support server link', 
    permissions: [], 
    botperms: [], 
    usage: 'Use the link sent.', 
    example: 'Send the command then click the link provided!', 
    ownerOnly: false,
    guildOnly: true,
    guarded: false,

}   

 
module.exports.run = async(client, message, args) => {


    message.channel.send('For help join our support server: https://discord.gg/qqb7ZK5kDz');

}