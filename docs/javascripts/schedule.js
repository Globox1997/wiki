const CURSEFORGE_KEY = String(process.env.CURSEFORGE_API_KEY);
const DISCORD_TOKEN = String(process.env.DISCORD_TOKEN);

const fs = require('fs').promises;
const path = require('path');
const Discord = require('discord.js');

const inputBody = {
    "modIds": [
        390991, 486971, 693762, 682362, 864150, 659920, 481182, 508695, 533879, 404828, 429383, 365273, 480911, 472795, 666011, 532113, 410830, 551914, 480786, 411621, 402739, 862603, 517130, 841617, 410224, 411400, 834671, 615948, 424480, 736803, 666672, 703778, 615504, 534368, 398269, 396541, 909161, 908906, 908912, 936864, 956695, 1091815, 1427001, 1427894, 1200302, 1451993, 949359, 1472303, 1475201, 1735046
    ]
};

const DISCORD_GUILD_ID = '745451299713056791';
const DISCORD_TIMEOUT_MS = 60 * 1000;

async function fetchJson(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Request to ' + url + ' failed: ' + response.status + ' ' + response.statusText);
    }
    return response.json();
}

async function collectModrinth() {
    const data = await fetchJson('https://api.modrinth.com/v2/user/Globox1997/projects', {
        headers: {
            'User-Agent': 'Globox1997/Globox_Z Wiki'
        }
    });

    const modrinthProjectDownloadsMap = new Map();
    let modrinthTotalDownloadCount = 0;
    data.forEach(obj => {
        modrinthProjectDownloadsMap.set(obj.slug, obj.downloads);
        modrinthTotalDownloadCount += obj.downloads;
    });
    modrinthProjectDownloadsMap.set('total', modrinthTotalDownloadCount);
    await writeFile(modrinthProjectDownloadsMap, "modrinth");
}

async function collectCurseforge() {
    const data = await fetchJson('https://api.curseforge.com/v1/mods', {
        method: 'POST',
        body: JSON.stringify(inputBody),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-api-key': CURSEFORGE_KEY
        }
    });

    const curseforgeProjectDownloadsMap = new Map();
    let curseforgeTotalDownloadCount = 0;
    data.data.forEach(obj => {
        curseforgeProjectDownloadsMap.set(obj.slug, obj.downloadCount);
        curseforgeTotalDownloadCount += obj.downloadCount;
    });
    curseforgeProjectDownloadsMap.set('total', curseforgeTotalDownloadCount);
    await writeFile(curseforgeProjectDownloadsMap, "curseforge");
}

async function collectDiscord() {
    const client = new Discord.Client({
        intents: [
            Discord.GatewayIntentBits.Guilds
        ]
    });

    try {
        const memberCount = await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => reject(new Error('Discord login timed out')), DISCORD_TIMEOUT_MS);

            client.once('ready', () => {
                clearTimeout(timeout);
                console.log(`Logged in as ${client.user.tag}`);

                const guild = client.guilds.cache.get(DISCORD_GUILD_ID);
                if (guild) {
                    resolve(guild.memberCount);
                } else {
                    reject(new Error('Guild not found'));
                }
            });

            client.login(DISCORD_TOKEN).catch(error => {
                clearTimeout(timeout);
                reject(error);
            });
        });

        await writeFile(new Map([['total', memberCount]]), "discord");
    } finally {
        client.destroy();
    }
}

async function writeFile(data, platform) {
    const filePath = path.join(__dirname, '../data/' + platform + '_collected.json');
    const jsonString = JSON.stringify(Object.fromEntries(data));

    await fs.writeFile(filePath, jsonString, 'utf8');
    console.log('JSON file ' + platform + '_collected has been overwritten successfully.');
}

async function main() {
    const sources = { modrinth: collectModrinth, curseforge: collectCurseforge, discord: collectDiscord };
    const names = Object.keys(sources);

    const results = await Promise.allSettled(names.map(name => sources[name]()));

    results.forEach((result, i) => {
        if (result.status === 'rejected') {
            console.log(`::warning::Could not update ${names[i]} data: ${result.reason?.message ?? result.reason}`);
        }
    });

    process.exit(results.every(result => result.status === 'rejected') ? 1 : 0);
}

main();
