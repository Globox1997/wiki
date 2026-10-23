const celebrationDays = [
    { month: 6, day: 1, splash: 'Happy birthday, wiki!' }
];

const secretWords = {
    herobrine: () => herobrine()
};

const searchJokes = {
    'creeper': 'Not in my mods... yet 👀',
    'enderman': 'Not in my mods... yet 👀',
    'warden': 'Not in my mods... yet 👀',
    'sniffer': 'Not in my mods... yet 👀',
    'allay': 'Not in my mods... yet 👀',
    'axolotl': 'Not in my mods... yet 👀',
    'herobrine': 'Removed. Again. 👁️👁️',
    'steve': 'That\'s a person, not an item!',
    'alex': 'That\'s a person, not an item!',
    'notch': 'He started it all. Not in here though!',
    'create': 'Someone else\'s mod! Mine are pretty creative too 😉',
    'mekanism': 'That\'s someone else\'s mod! Try one of mine instead 😉',
    'botania': 'That\'s someone else\'s mod! Try one of mine instead 😉',
    'thaumcraft': 'That\'s someone else\'s mod! Try one of mine instead 😉',
    'twilight forest': 'Wrong forest! Try the Oblivion instead 🌲',
    'applied energistics': 'That\'s someone else\'s mod! Try one of mine instead 😉',
    'ae2': 'That\'s someone else\'s mod! Try one of mine instead 😉',
    'tinkers': 'Looking for smelting and casting? Try Cupellation! 🔥',
    'tinkers construct': 'Looking for smelting and casting? Try Cupellation! 🔥',
    'tconstruct': 'Looking for smelting and casting? Try Cupellation! 🔥',
    'jei': 'Recipe viewer? You\'re looking at one! 📖',
    'rei': 'Recipe viewer? You\'re looking at one! 📖',
    'emi': 'Recipe viewer? You\'re looking at one! 📖',
    'optifine': 'Performance boost not included 🐢',
    'sodium': 'Performance boost not included 🐢'
};

const WIKI_ICON = '/wiki/assets/general/main/main_icon.png';

function wikiEgg(name) {
    return new URLSearchParams(window.location.search).get('egg') === name;
}

function wikiSeason() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const celebration = celebrationDays.find(c => c.month === month && c.day === day);

    if (wikiEgg('aprilfools') || (month === 4 && day === 1)) {
        return { name: 'aprilfools', splash: 'Dinnerbone was here!' };
    }
    if (wikiEgg('celebration') || celebration) {
        return { name: 'celebration', splash: celebration ? celebration.splash : celebrationDays[0].splash };
    }
    if (wikiEgg('christmas') || (month === 12 && day <= 26)) {
        return { name: 'christmas', splash: 'Merry Christmas!' };
    }
    if (wikiEgg('halloween') || (month === 10 && day >= 25)) {
        return { name: 'halloween', splash: 'Spooky!' };
    }
    return null;
}

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function readStorage(storage, key) {
    try {
        return storage.getItem(key);
    } catch (error) {
        return null;
    }
}

function writeStorage(storage, key, value) {
    try {
        storage.setItem(key, value);
    } catch (error) {
    }
}

const activeSeason = wikiSeason();
if (activeSeason) {
    document.documentElement.classList.add('season-' + activeSeason.name);
}

window.addEventListener('DOMContentLoaded', () => {
    logoClicks();
    secretWordListener();
    searchJokeListener();
    dehydrationReminder();
    voidzFall();

    if (activeSeason && activeSeason.name === 'christmas') {
        headerSnow();
    }
    if (activeSeason && activeSeason.name === 'celebration') {
        celebrationConfetti();
    }
});

function showAdvancement({ title = 'Advancement Made!', text, icon = WIKI_ICON, kind = 'advancement' }) {
    let container = document.querySelector('.advancement-toasts');
    if (!container) {
        container = document.createElement('div');
        container.className = 'advancement-toasts';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'advancement-toast advancement-toast--' + kind;
    toast.setAttribute('role', 'status');

    const image = document.createElement('img');
    image.src = icon;
    image.alt = '';

    const content = document.createElement('div');
    const titleElement = document.createElement('div');
    titleElement.className = 'advancement-toast-title';
    titleElement.textContent = title;
    const textElement = document.createElement('div');
    textElement.className = 'advancement-toast-text';
    textElement.textContent = text;
    content.appendChild(titleElement);
    content.appendChild(textElement);

    toast.appendChild(image);
    toast.appendChild(content);
    container.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('advancement-toast--visible'));
    setTimeout(() => {
        toast.classList.remove('advancement-toast--visible');
        setTimeout(() => toast.remove(), 500);
    }, 5000);
}

function logoClicks() {
    const logo = document.querySelector('.md-header .md-logo');
    if (!logo) {
        return;
    }
    let clicks = 0;
    let timer = null;

    logo.addEventListener('click', (event) => {
        if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
            return;
        }
        event.preventDefault();
        clicks++;
        clearTimeout(timer);

        if (clicks >= 10) {
            clicks = 0;
            showAdvancement({ text: 'Clicking Champion' });
            return;
        }
        timer = setTimeout(() => {
            clicks = 0;
            window.location.href = logo.href;
        }, 400);
    });
}

function secretWordListener() {
    const words = Object.keys(secretWords);
    let typed = '';

    window.addEventListener('keydown', (event) => {
        const target = event.target;
        if (event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1) {
            return;
        }
        if (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
            return;
        }

        const candidate = (typed + event.key.toLowerCase()).slice(-20);
        const matching = words.find(word => {
            for (let length = Math.min(word.length, candidate.length); length >= 3; length--) {
                if (candidate.endsWith(word.slice(0, length))) {
                    return true;
                }
            }
            return false;
        });
        if (matching && 'npsf/,.'.includes(event.key.toLowerCase())) {
            event.stopImmediatePropagation();
        }

        typed = candidate;
        const word = words.find(w => typed.endsWith(w));
        if (word) {
            typed = '';
            secretWords[word]();
        }
    }, true);
}

function herobrine() {
    if (document.querySelector('.herobrine-overlay')) {
        return;
    }
    const overlay = document.createElement('div');
    overlay.className = 'herobrine-overlay';
    const eyes = document.createElement('div');
    eyes.className = 'herobrine-eyes';
    eyes.appendChild(document.createElement('span'));
    eyes.appendChild(document.createElement('span'));
    overlay.appendChild(eyes);
    document.body.appendChild(overlay);

    requestAnimationFrame(() => overlay.classList.add('herobrine-overlay--visible'));
    setTimeout(() => overlay.classList.remove('herobrine-overlay--visible'), 3200);
    setTimeout(() => overlay.remove(), 4000);
}

function searchJokeListener() {
    const input = document.querySelector('.md-search__input');
    const result = document.querySelector('.md-search-result');
    if (!input || !result) {
        return;
    }
    const joke = document.createElement('div');
    joke.className = 'search-joke';
    joke.hidden = true;
    result.insertBefore(joke, result.firstChild);

    let timer = null;
    input.addEventListener('input', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            const message = searchJokes[input.value.trim().toLowerCase()];
            joke.textContent = message || '';
            joke.hidden = !message;
        }, 250);
    });
}

function dehydrationReminder() {
    const HOUR = 60 * 60 * 1000;
    if (readStorage(sessionStorage, 'wiki-hydrated') && !wikiEgg('hydrate')) {
        return;
    }
    let start = parseInt(readStorage(sessionStorage, 'wiki-session-start'));
    if (!start) {
        start = Date.now();
        writeStorage(sessionStorage, 'wiki-session-start', start);
    }
    const wait = wikiEgg('hydrate') ? 1500 : Math.max(0, start + HOUR - Date.now());

    setTimeout(() => {
        writeStorage(sessionStorage, 'wiki-hydrated', '1');
        showAdvancement({
            title: 'Stay hydrated!',
            text: 'You\'ve been reading for an hour. Grab some water!',
            icon: '/wiki/assets/general/icons/dehydration_icon.png',
            kind: 'hydration'
        });
    }, wait);
}

function voidzFall() {
    if (!window.location.pathname.startsWith('/wiki/mods/VoidZ')) {
        return;
    }
    if (wikiEgg('void')) {
        setTimeout(fallIntoVoid, 500);
        return;
    }
    let timer = null;
    let fallen = false;

    window.addEventListener('scroll', () => {
        clearTimeout(timer);
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
        if (!fallen && atBottom) {
            timer = setTimeout(() => {
                fallen = true;
                fallIntoVoid();
            }, 1200);
        }
    }, { passive: true });
}

function fallIntoVoid() {
    const reduceMotion = prefersReducedMotion();
    const overlay = document.createElement('div');
    overlay.className = 'void-overlay';

    if (!reduceMotion) {
        for (let i = 0; i < 60; i++) {
            const particle = document.createElement('span');
            particle.className = 'void-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 3 + 's';
            particle.style.animationDuration = 2 + Math.random() * 3 + 's';
            overlay.appendChild(particle);
        }
    }

    const message = document.createElement('div');
    message.className = 'void-message';
    const headline = document.createElement('div');
    headline.className = 'void-message-headline';
    headline.textContent = 'You died!';
    const reason = document.createElement('div');
    reason.textContent = 'Reader fell out of the world';
    const respawn = document.createElement('button');
    respawn.className = 'md-button';
    respawn.textContent = 'Respawn';
    message.appendChild(headline);
    message.appendChild(reason);
    message.appendChild(respawn);
    overlay.appendChild(message);

    document.body.appendChild(overlay);
    document.documentElement.classList.add('void-falling');
    requestAnimationFrame(() => overlay.classList.add('void-overlay--visible'));

    respawn.addEventListener('click', () => {
        document.documentElement.classList.remove('void-falling');
        overlay.classList.remove('void-overlay--visible');
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
        setTimeout(() => overlay.remove(), 1000);
    });
}

function headerSnow() {
    const header = document.querySelector('.md-header');
    if (!header || prefersReducedMotion()) {
        return;
    }
    const snow = document.createElement('div');
    snow.className = 'header-snow';
    for (let i = 0; i < 40; i++) {
        const flake = document.createElement('span');
        flake.style.left = Math.random() * 100 + '%';
        flake.style.animationDelay = -Math.random() * 6 + 's';
        flake.style.animationDuration = 4 + Math.random() * 4 + 's';
        flake.style.opacity = 0.5 + Math.random() * 0.5;
        snow.appendChild(flake);
    }
    header.appendChild(snow);
}

function celebrationConfetti() {
    const today = new Date().toDateString();
    if (readStorage(localStorage, 'wiki-confetti') === today && !wikiEgg('celebration')) {
        return;
    }
    writeStorage(localStorage, 'wiki-confetti', today);
    if (prefersReducedMotion()) {
        return;
    }
    const colors = ['#ff4d6d', '#ffd23f', '#3ec1d3', '#7bd389', '#c5aaee', '#ff9a3c'];
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    for (let i = 0; i < 150; i++) {
        const piece = document.createElement('span');
        piece.style.left = Math.random() * 100 + '%';
        piece.style.background = colors[i % colors.length];
        piece.style.animationDelay = Math.random() * 1.5 + 's';
        piece.style.animationDuration = 2.5 + Math.random() * 2 + 's';
        piece.style.setProperty('--spin', (Math.random() * 720 - 360) + 'deg');
        piece.style.setProperty('--drift', (Math.random() * 120 - 60) + 'px');
        confetti.appendChild(piece);
    }
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 6500);
}
