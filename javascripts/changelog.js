// Changelogs are read in sidebar.js

var changelogMap = new Map();

var unusedRepos = ["aged", "boatism", "titan-reborn", "inmis"];
// Not used lul
var extra = ["travelerz", "welcomescreen", "staminaz", "dehydration", "rewardz"];

async function getCommits(repo, owner) {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
    const response = await fetch(url, {
        headers: {
            'User-Agent': 'Globox1997/Globox_Z Wiki',
            'Accept': 'application/vnd.github.raw+json'
        }
    });

    if (!response.ok) {
        throw new Error('Fehler beim Abrufen der Commits in Repo ' + repo + ' : ' + response.statusText);
    }

    return response.json();
}

async function getChangelogFromCommit(repo, owner, commitSha) {
    const filePath = 'CHANGELOG.md';

    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${commitSha}`;

    const response = await fetch(url, {
        headers: {
            'User-Agent': 'Globox1997/Globox_Z Wiki',
            'Accept': 'application/vnd.github.raw+json'
        }
    });

    if (response.status === 404) {
        console.log(`CHANGELOG.md in Commit ${commitSha} nicht gefunden`);
        return null;
    } else if (!response.ok) {
        // throw new Error('Fehler beim Abrufen des CHANGELOG.md');
    }

    return response.text();
}

async function collectChangelogs(repo, owner, id) {
    try {
        const commits = await getCommits(repo, owner);

        var repoMap = new Map();

        for (const commit of commits) {
            const commitMessage = commit.commit.message.toLowerCase();
            const commitSha = commit.sha;

            if (commitMessage.startsWith('update ')) {
                let version = commitMessage.replace("update ", "");

                if (isNaN(parseInt(Array.from(version)[0]))) {
                    continue;
                }

                try {
                    const existingChangelog = await getRepositoryData('changelog', id);
                    if (existingChangelog !== undefined && existingChangelog.hasOwnProperty(version)) {
                        continue;
                    }
                } catch (error) {
                }

                const changelogContent = await getChangelogFromCommit(repo, owner, commitSha);
                if (changelogContent) {
                    if (!changelogContent.startsWith('#')) {
                        continue;
                    }
                    repoMap.set(version, changelogContent);
                }
            }
        }

        changelogMap.set(id, repoMap);

        return new Promise((resolve, reject) => {
            resolve();
        });

    } catch (error) {
        console.error(error);
    }
}

async function getRepositoryData(file, src) {
    const fs = require('fs').promises;
    const path = require('path');

    if (typeof file !== 'undefined') {
        try {
            // hosting variant, to read file on server.
            // const response = await fetch('../wiki/data/' + file + '_collected.json');
            // const jsonData = await response.json();

            const filePath = path.join(__dirname, '../data/' + file + '_collected.json');

            const data = await fs.readFile(filePath, 'utf8');

            const jsonData = JSON.parse(data);

            return jsonData[src];
        } catch (error) {
            // console.error('Error:', error);
        }
    }
    return NaN;
}


function deepMerge(target, source) {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            if (typeof source[key] === 'object' && !Array.isArray(source[key]) && source[key] !== null) {
                if (!target[key]) {
                    target[key] = {};
                }
                deepMerge(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}

// Function to compare version strings
function compareVersions(a, b) {
    const partsA = a.split('.').map(Number);
    const partsB = b.split('.').map(Number);

    for (let i = 0; i < partsA.length; i++) {
        if (partsA[i] > partsB[i]) return 1;
        if (partsA[i] < partsB[i]) return -1;
    }
    return 0;
}

// Function to sort the entries by version
function sortByVersion(obj) {
    for (let key in obj) {
        const sorted = Object.keys(obj[key])
            .sort(compareVersions)
            .reduce((acc, version) => {
                acc[version] = obj[key][version];
                return acc;
            }, {});

        obj[key] = sorted;
    }
}

function writeFile(data, platform) {
    const fs = require('fs').promises;
    const path = require('path');
    const filePath = path.join(__dirname, '../data/' + platform + '_collected.json');

    // Convert the incoming data to a plain object
    const plainObject = {};
    for (let [key, value] of data) {
        plainObject[key] = value instanceof Map ? Object.fromEntries(value) : value;
    }

    // Read the existing JSON file, if it exists
    fs.readFile(filePath, 'utf8')
        .then(fileData => {
            let existingData = {};
            if (fileData) {
                existingData = JSON.parse(fileData);
            }

            // Deep merge the new data into the existing data
            const updatedData = deepMerge(existingData, plainObject);

            // Sort the version entries before writing to the file
            sortByVersion(updatedData);

            // Write the updated and sorted object back to the file
            return fs.writeFile(filePath, JSON.stringify(updatedData, null, 2), 'utf8');
        })
        .then(() => {
            console.log('JSON file ' + platform + '_collected has been updated and sorted successfully.');
        })
        .catch(err => {
            console.error('Error writing to JSON file:', err);
        });
}

async function fetchData() {
    try {
        const response = await fetch('https://api.modrinth.com/v2/user/Globox1997/projects', {
            headers: {
                'User-Agent': 'Globox1997/Globox_Z Wiki'
            }
        });

        const data = await response.json();

        const changelogPromises = data.map(async (obj) => {
            try {
                const info = obj.source_url.split("/").slice(-2);
                const repo = info[1];
                const owner = info[0];

                if (unusedRepos.indexOf(obj.slug) > -1) {
                    console.log(`Skipping changelog collection for ${owner}/${repo}`);
                    return;
                }

                await collectChangelogs(repo, owner, obj.slug);
            } catch (error) {
                console.error(obj.title + " : " + error);
            }
        });

        await Promise.all(changelogPromises);

        writeFile(changelogMap, "changelog");

    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
