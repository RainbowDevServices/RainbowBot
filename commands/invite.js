module.exports.config = { 
    // Set all config settings for the commands
    
    name: 'invite', // A string of the command name, This is what the user will type
    aliases: [], //  Array of all commands aliases
    group: 'info', // A string of the commands group, this is the group the command will be registed in 
    description: 'Sends the link to invite RainbowBot to your server.', // A string of the commands description, This is a vital option
    permissions: [], //  A array of permissions needed to use the command 
    botperms: [], // A Array of permissions the bot needs to run the command
    usage: 'It should be used to invite the bot to your own server.', // A string of how the command should properly be used,
    example: ' you:rb!invite RainbowBot:Wanna invite me? Heres the link:[link here]', // A string of a example of how the command should be used
    ownerOnly: false, // A boolean of the command is a owner only command or not
    guildOnly: false, // A boolean of the command can only be used in a guild (Server)
    guarded: false, // A boolean of wheather the command is guarded against the disable/enable command (So it cant be disabled)

}   

// Make sure all commands are in the "commands" folder 
 
module.exports.run = async(client, message, args) => {

    // Main function of code , Here's where you put all your code for the command

    message.channel.send('Wanna invite me? Heres the link: https://discord.com/api/oauth2/authorize?client_id=920416548819173396&permissions=8&scope=bot');

}

// If you guys want to add any commands I wrote a short guide on how everything works :)