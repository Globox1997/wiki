window.addEventListener('load', () => {
    dailyItem();
});

function collectDailyCandidates() {
    const pool = [];
    document.querySelectorAll('.md-nav[data-md-level="3"] .md-nav__item a').forEach(a => {
        const textureSplit = a.href.split('/');
        const type = textureSplit[textureSplit.length - 3];
        if (!type || (type.toLowerCase() !== 'items' && type.toLowerCase() !== 'blocks')) {
            return;
        }
        const modId = textureSplit[textureSplit.length - 4];
        let texture = textureSplit[textureSplit.length - 2].toLowerCase();
        if (getCustomTexture(texture) !== null) {
            texture = getCustomTexture(texture);
        }
        const modIcon = modIcons.find(m => m.url.toLowerCase() === modId.toLowerCase());
        if (!modIcon) {
            return;
        }
        pool.push({
            href: a.href,
            name: a.textContent.trim(),
            type: type.toLowerCase(),
            modId: modId.toLowerCase(),
            texture: texture,
            modIcon: modIcon
        });
    });
    return pool.sort((a, b) => a.href.localeCompare(b.href));
}

function dailyIndex(length) {
    const today = new Date();
    const key = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let hash = 2166136261;
    for (let i = 0; i < key.length; i++) {
        hash ^= key.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0) % length;
}

async function dailyItem() {
    const container = document.getElementById('daily-item');
    if (!container) {
        return;
    }
    const pool = collectDailyCandidates();
    if (pool.length === 0) {
        return;
    }
    const item = pool[dailyIndex(pool.length)];

    const card = document.createElement('a');
    card.className = 'daily-item';
    card.href = item.href;

    const render = document.createElement('img');
    render.className = 'daily-item-render';
    render.alt = item.name;
    render.src = '/wiki/assets/' + item.modId + '/' + item.type + '/' + item.texture + '.png';
    render.onerror = () => {
        render.onerror = null;
        render.src = '/wiki/assets/general/' + item.type + '/' + item.modId + '/' + item.texture + '.png';
    };

    const text = document.createElement('div');
    text.className = 'daily-item-text';

    const name = document.createElement('div');
    name.className = 'daily-item-name';
    name.textContent = item.name;

    const mod = document.createElement('div');
    mod.className = 'daily-item-mod';
    const modIcon = document.createElement('img');
    modIcon.src = '/wiki/assets/general/icons/' + item.modIcon.texture + '.png';
    modIcon.alt = '';
    mod.appendChild(modIcon);
    mod.appendChild(document.createTextNode(item.modIcon.tooltip + ' · ' + (item.type === 'items' ? 'Item' : 'Block')));

    const description = document.createElement('p');
    description.className = 'daily-item-description';

    text.appendChild(name);
    text.appendChild(mod);
    text.appendChild(description);
    card.appendChild(render);
    card.appendChild(text);
    container.appendChild(card);

    try {
        const response = await fetch(item.href);
        const page = new DOMParser().parseFromString(await response.text(), 'text/html');
        const paragraph = page.querySelector('h2#description + p');
        if (paragraph) {
            description.textContent = paragraph.textContent.trim();
        }
    } catch (error) {
        console.error('Could not load item description:', error);
    }
}
