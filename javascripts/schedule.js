var projectDownloadsMap = new Map();
var totalDownloadCount = 0;

fetch(`https://api.modrinth.com/v2/user/Globox1997/projects`, {
    headers: {
        'User-Agent': 'Globox1997/Globox_Z Wiki'
    }
}).then(response => response.json()).then(data => {
    data.reduce((acc, obj) => {
        projectDownloadsMap.set(obj.slug, obj.downloads);
        totalDownloadCount += obj.downloads;
    }, 0);
}).catch(error => {
    console.error('Error:', error);
}).then(data => {
    projectDownloadsMap.set('total', totalDownloadCount);
    writeFile(projectDownloadsMap);
});

function writeFile(data) {
    const fs = require('fs');
    const path = require('path');

    const filePath = path.join(__dirname, '../data/collected.json');

    const plainObject = Object.fromEntries(data);
    const jsonString = JSON.stringify(plainObject);

    fs.writeFile(filePath, jsonString, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to JSON file:', err);
        } else {
            console.log('JSON file has been overwritten successfully.');
        }
    });
}
