module.exports.config = { 
    // Set all config settings for the commands
    
    name: 'shutdown', // A string of the command name, This is what the user will type
    aliases: [], //  Array of all commands aliases
    group: 'moderation', // A string of the commands group, this is the group the command will be registed in 
    description: 'Shuts down the bot.', // A string of the commands description, This is a vital option
    permissions: [], //  A array of permissions needed to use the command 
    botperms: [], // A Array of permissions the bot needs to run the command
    usage: 'rb!shutdown', // A string of how the command should properly be used,
    example: 'RainbowBot Shutting Down..', // A string of a example of how the command should be used
    ownerOnly: true, // A boolean of the command is a owner only command or not
    guildOnly: false, // A boolean of the command can only be used in a guild (Server)
    guarded: false, // A boolean of wheather the command is guarded against the disable/enable command (So it cant be disabled)

}   

// Make sure all commands are in the "commands" folder 
 
module.exports.run = async(client, message, args) => {

    // Main function of code , Here's where you put all your code for the command

    await client.channels.cache.get(`950102752577593449`).send(`RainbowBot Shutting Down..`)
    return process.exit();

}

// If you guys want to add any commands I wrote a short guide on how everything works :)