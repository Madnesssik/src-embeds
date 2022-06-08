module.exports = class Embed {
    constructor(title, description, footer, timestamp, color) {
      title = this.title
      description = this.description
      footer = this.footer
      timestamp = this.timestamp
      color = this.color
      test2 = this.test
    }
    make(title, description, footer, timestamp, color) {
        const Discord = require('discord.js');

        if(!title) throw new Error(`title must be provided`)
        if(!description) throw new Error(`description must be provided`)
        if(!footer) throw new Error(`footer must be provided`)
        if(!timestamp) throw new Error(`timestamp must be provided`)
        if(!color) throw new Error(`The color must be provided`)

        if(timestamp === false) return new Discord.MessageEmbed()
            .setTitle(title)
            .setDescription(description)
            .setFooter(footer)
            .setColor(color);

        else return new Discord.MessageEmbed()
            .setTitle(title)
            .setDescription(description)
            .setFooter(footer)
            .setColor(color)
            .setTimestamp(); 
    }
}
