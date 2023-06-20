const KEY = process.env.CURSEFORGE_API_KEY;

console.log(KEY);
console.log(process.env.CURSEFORGE_API_KEY);


// var projectDownloadsMap = new Map();
// var totalDownloadCount = 0;

// fetch(`https://api.modrinth.com/v2/user/Globox1997/projects`, {
//     headers: {
//         'User-Agent': 'Globox1997/Globox_Z Wiki'
//     }
// }).then(response => response.json()).then(data => {
//     data.reduce((acc, obj) => {
//         projectDownloadsMap.set(obj.slug, obj.downloads);
//         totalDownloadCount += obj.downloads;
//     }, 0);
// }).then(data => {
//     projectDownloadsMap.set('total', totalDownloadCount);
//     writeFile(projectDownloadsMap, "modrinth");
// }).catch(error => {
//     console.error('Error:', error);
// });

// const inputBody = {
//     "modIds": [
//         390991, 486971, 693762, 682362, 864150, 659920, 481182, 508695, 533879, 404828, 429383, 365273, 480911, 472795, 666011, 532113, 410830, 551914, 480786, 411621, 402739, 862603, 517130, 841617, 410224, 411400, 834671, 615948, 424480, 736803, 666672, 703778, 615504, 534368, 398269, 396541
//     ]
// };

projectDownloadsMap.clear();
totalDownloadCount = 0;

fetch('https://api.curseforge.com/v1/mods', {
    method: 'POST',
    body: JSON.stringify(inputBody),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': KEY
    }
}).then(response => response.json()).then(data => {
    data.data.reduce((acc, obj) => {
        projectDownloadsMap.set(obj.slug, obj.downloadCount);
        totalDownloadCount += obj.downloadCount;
    }, 0);
}).then(data => {
    //  projectDownloadsMap.set('total', totalDownloadCount);
    //  writeFile(projectDownloadsMap, "curseforge");
    console.log(projectDownloadsMap);
}).catch(error => {
    console.error('Error:', error);
});

// function writeFile(data, platform) {
//     const fs = require('fs');
//     const path = require('path');

//     const filePath = path.join(__dirname, '../data/' + platform + '_collected.json');

//     const plainObject = Object.fromEntries(data);
//     const jsonString = JSON.stringify(plainObject);

//     fs.writeFile(filePath, jsonString, 'utf8', (err) => {
//         if (err) {
//             console.error('Error writing to JSON file:', err);
//         } else {
//             console.log('JSON file has been overwritten successfully.');
//         }
//     });
// }
