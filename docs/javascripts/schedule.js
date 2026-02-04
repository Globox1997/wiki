const CURSEFORGE_KEY = String(process.env.CURSEFORGE_API_KEY);
const DISCORD_TOKEN = String(process.env.DISCORD_TOKEN);

let completedOperations = 0;

var modrinthProjectDownloadsMap = new Map();
var modrinthTotalDownloadCount = 0;

fetch('https://api.modrinth.com/v2/user/Globox1997/projects', {
    headers: {
        'User-Agent': 'Globox1997/Globox_Z Wiki'
    }
}).then(response => response.json()).then(data => {
    data.reduce((acc, obj) => {
        modrinthProjectDownloadsMap.set(obj.slug, obj.downloads);
        modrinthTotalDownloadCount += obj.downloads;
    }, 0);
}).then(data => {
    modrinthProjectDownloadsMap.set('total', modrinthTotalDownloadCount);
    writeFile(modrinthProjectDownloadsMap, "modrinth");
}).catch(error => {
    console.error('Error:', error);
});

const inputBody = {
    "modIds": [
        390991, 486971, 693762, 682362, 864150, 659920, 481182, 508695, 533879, 404828, 429383, 365273, 480911, 472795, 666011, 532113, 410830, 551914, 480786, 411621, 402739, 862603, 517130, 841617, 410224, 411400, 834671, 615948, 424480, 736803, 666672, 703778, 615504, 534368, 398269, 396541, 909161, 908906, 908912, 936864, 956695, 1091815, 1427001, 1427894, 1200302, 1451993, 949359
    ]
};

var curseforgeProjectDownloadsMap = new Map();
var curseforgeTotalDownloadCount = 0;

fetch('https://api.curseforge.com/v1/mods', {
    method: 'POST',
    body: JSON.stringify(inputBody),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': CURSEFORGE_KEY
    }
}).then(response => response.json()).then(data => {
    data.data.reduce((acc, obj) => {
        curseforgeProjectDownloadsMap.set(obj.slug, obj.downloadCount);
        curseforgeTotalDownloadCount += obj.downloadCount;
    }, 0);
}).then(data => {
    curseforgeProjectDownloadsMap.set('total', curseforgeTotalDownloadCount);
    writeFile(curseforgeProjectDownloadsMap, "curseforge");
}).catch(error => {
    console.error('Error:', error);
});

discordProjectDownloadsMap = new Map();

const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);

    const guildId = '745451299713056791';
    const guild = client.guilds.cache.get(guildId);

    if (guild) {
        discordProjectDownloadsMap.set('total', guild.memberCount);
        writeFile(discordProjectDownloadsMap, "discord");
    } else {
        console.log('Guild not found');
    }
});

client.login(DISCORD_TOKEN);

function writeFile(data, platform) {
    const fs = require('fs');
    const path = require('path');

    const filePath = path.join(__dirname, '../data/' + platform + '_collected.json');

    const plainObject = Object.fromEntries(data);
    const jsonString = JSON.stringify(plainObject);

    fs.writeFile(filePath, jsonString, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to JSON file:', err);
            stopScript();
        } else {
            console.log('JSON file ' + platform + '_collected has been overwritten successfully.');
        }
        completedOperations++;
        if (completedOperations === 3) {
            stopScript();
        }
    });
}

function stopScript() {
    client.destroy();
    process.exit();
}