module.exports = class Embed {
    constructor(title, description, footer, timestamp, color) {
        title = this.title
        description = this.description
        footer = this.footer
        timestamp = this.timestamp
        color = this.color
    }
    new(title, description, footer, timestamp, color) {
        const Discord = require('discord.js');
        var version = Discord.version.split('');
        if(version.includes('(')) {
            version = version.join('').split('(').pop().split('');
        }
        version = parseInt(version[0] + version[1]);

        if(!title) throw new Error(`title must be provided`)
        if(!description) throw new Error(`description must be provided`)
        if(!footer) throw new Error(`footer must be provided`)
        if(!timestamp) throw new Error(`timestamp must be provided`)
        if(!color) throw new Error(`The color must be provided`)

        if (version === 12 || version === 13) {

            if(timestamp === false) return new Discord.MessageEmbed()
                .setTitle(title)
                .setDescription(description)
                .setFooter(footer)
                .setColor(color);

            else if(timestamp === true) return new Discord.MessageEmbed()
                .setTitle(title)
                .setDescription(description)
                .setFooter(footer)
                .setColor(color)
                .setTimestamp(); 
        } else if (version === 11) {

            if(timestamp === false) return new Discord.RichEmbed()
                .setTitle(title)
                .setDescription(description)
                .setFooter(footer)
                .setColor(color);

            else if(timestamp === true) return new Discord.RichEmbed()
                .setTitle(title)
                .setDescription(description)
                .setFooter(footer)
                .setColor(color)
                .setTimestamp(); 

        }
    }
}