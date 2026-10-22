var informationMap = new Map();

const githubNames = ["Globox1997", "GitPois1x", "xR4YM0ND"];

function githubHeaders() {
    const headers = {
        'User-Agent': 'Globox1997/Globox_Z Wiki',
        'Accept': 'application/vnd.github+json'
    };
    if (process.env.GITHUB_TOKEN) {
        headers['Authorization'] = 'Bearer ' + process.env.GITHUB_TOKEN;
    }
    return headers;
}

async function fetchJson(url, headers) {
    const response = await fetch(url, { headers: headers });
    if (!response.ok) {
        throw new Error('Request to ' + url + ' failed: ' + response.status + ' ' + response.statusText);
    }
    return response.json();
}

async function getAllRepos(name) {
    const repos = [];
    for (let page = 1; ; page++) {
        const data = await fetchJson(`https://api.github.com/users/${name}/repos?per_page=100&page=${page}`, githubHeaders());
        repos.push(...data);
        if (data.length < 100) {
            return repos;
        }
    }
}

async function main() {
    // Modrinth first: the GitHub data is matched against these projects
    const data = await fetchJson('https://api.modrinth.com/v2/user/Globox1997/projects', {
        'User-Agent': 'Globox1997/Globox_Z Wiki'
    });
    data.forEach(obj => {
        var repoMap = new Map();
        repoMap.set('title', obj.title);
        repoMap.set('game_versions', obj.game_versions);
        repoMap.set('client_side', capitalizeFirstLetter(obj.client_side));
        repoMap.set('server_side', capitalizeFirstLetter(obj.server_side));
        informationMap.set(obj.slug, repoMap);
    });

    const allRepoData = await Promise.all(githubNames.map(name => getAllRepos(name)));
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
                value.set('html_url', repo.html_url);
                break;
            }
        }
    });

    writeFile(informationMap, "repository");
}

main().catch(error => {
    console.error('Error:', error);
    process.exit(1);
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
            process.exit(1);
        } else {
            console.log('JSON file ' + platform + '_collected has been overwritten successfully.');
        }
    });
}