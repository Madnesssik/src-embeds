<div align="center">
    <h1>src-embeds</h1>
    <p>
        <a href="https://www.npmjs.com/package/src-embeds"><img src="https://img.shields.io/npm/v/src-embeds?maxAge=3600" alt="NPM version" \></a>
        <a href="https://www.npmjs.com/package/src-embeds"><img src="https://img.shields.io/npm/dt/src-embeds?maxAge=3600" alt= "NPM download" \></a>
    </p>
    <p>
        <a href="https://www.npmjs.com/package/src-embeds"><img src="https://nodei.co/npm/src-embeds?downloads=true&stars=true" alt="NPM Banner" \></a>
    </p>
</div>

## 📂 | Installation
```sh
npm i src-embeds
```

## 📜 | Setup
```js
const Discord = require('discord.js');
const embeds = require('src-embeds');
```

## 📜 | Documentation
`embed(title, description, footer, color, timestamp);`
* `title` -> The title of the embed [String]()
* `description` -> The description of the embed [String]()
* `footer` -> The footer of the embed [String]()
* `color` -> The color of the embed [String]()
* `timestamp` -> The timestamp of the embed [Boolean]()

## ✍ | Example Usage

### Without Fields
```js
const Discord = require('discord.js');
const EmbedMaker = require('src-embeds');
const client = new Discord.Client();
client.embed = new EmbedMaker();

client.on('message', async message => {
    const myembed = new client.embed.make("This is my embed!", "This is my description!", "This is the footer", "#ffffff", true);
    message.channel.send({embed: myembed});
});
```

### With Fields
```js
const Discord = require('discord.js');
const EmbedMaker = require('src-embeds');
const client = new Discord.Client();
client.embed = new EmbedMaker();

client.on('message', async message => {
    const myembed = new client.embed.make("This is my embed!", "This is my description!", "This is the footer", "#ffffff", true).addField("This is the field name", "This is the field description", true);
    message.channel.send({embed: myembed});
});
```

## 👥 | Contact
<a href="https://discord.gg/5JtyYqW"><img src="https://discord.com/api/guilds/748098690874474567/widget.png?style=banner1"></a>
