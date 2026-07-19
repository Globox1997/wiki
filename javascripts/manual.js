var informationMap = new Map();

const githubNames = ["Globox1997", "GitPois1x", "xR4YM0ND"];

fetch('https://api.modrinth.com/v2/user/Globox1997/projects', {
    headers: {
        'User-Agent': 'Globox1997/Globox_Z Wiki'
    }
}).then(response => response.json()).then(data => {
    data.reduce((acc, obj) => {
        var repoMap = new Map();
        repoMap.set('title', obj.title);
        repoMap.set('game_versions', obj.game_versions);
        repoMap.set('client_side', capitalizeFirstLetter(obj.client_side));
        repoMap.set('server_side', capitalizeFirstLetter(obj.server_side));
        informationMap.set(obj.slug, repoMap);
    }, 0);
}).then(
    Promise.all(githubNames.map(name =>
        fetch(`https://api.github.com/users/${name}/repos?per_page=100`)
            .then(response => response.json()))).then(allRepoData => {
                const repoData = allRepoData.flat();

                informationMap.forEach((value, key) => {
                    for (const repo of repoData) {
                        if (repo.name === value.get('title') || repoCheck(value.get('title'), repo.name)) {
                            value.set('created_at', convertDate(repo.created_at));
                            value.set('updated_at', convertDate(repo.updated_at));
                            value.set('open_issues', repo.open_issues);
                            value.set('forks', repo.forks);
                            value.set('stargazers_count', repo.stargazers_count);
                            value.set('license', repo.license?.spdx_id ?? "NONE");
                            break;
                        }
                    }
                });

                writeFile(informationMap, "repository");

            }).catch(error => {
                console.error(error);
            })
).catch(error => {
    console.error('Error:', error);
});

function repoCheck(title, name) {
    if (title === 'TieredZ' && name === 'tiered') {
        return true;
    } else if (title === 'StaminaZ' && name === 'Stamina') {
        return true;
    }
    return false;
}

function convertDate(dateString) {
    const dateObj = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    return formattedDate;
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function writeFile(data, platform) {
    const fs = require('fs');
    const path = require('path');

    const filePath = path.join(__dirname, '../data/' + platform + '_collected.json');

    const plainObject = {};
    for (let [key, value] of data) {
        plainObject[key] = value instanceof Map ? Object.fromEntries(value) : value;
    }
    const jsonString = JSON.stringify(plainObject);

    fs.writeFile(filePath, jsonString, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to JSON file:', err);
            stopScript();
        } else {
            console.log('JSON file ' + platform + '_collected has been overwritten successfully.');
        }
    });
}