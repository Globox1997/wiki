window.addEventListener('load', () => {
    initQuiz();
});

let objectsPool = [];
let currentObjects = [];
let currentMods = [];
let score = 0;
let total = 0;
let placedCount = 0;

function initQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) {
        return;
    }
    objectsPool = collectObjects();
    if (objectsPool.length < 3) {
        return;
    }
    updateScoreDisplay();
    newRound();
}

function collectObjects() {
    const pool = [];
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        if (element.classList.contains('md-nav') && element.getAttribute('data-md-level') === '3') {
            const navItems = element.getElementsByClassName('md-nav__item');
            for (let i = 0; i < navItems.length; i++) {
                const a = navItems[i].querySelector('a');
                if (!a) {
                    continue;
                }
                const textureSplit = a.href.split('/');
                const type = textureSplit[textureSplit.length - 3];

                if (!type || (type.toLowerCase() !== 'items' && type.toLowerCase() !== 'blocks')) continue;

                const modId = textureSplit[textureSplit.length - 4];
                let texture = textureSplit[textureSplit.length - 2];

                if (typeof getCustomTexture === 'function' && getCustomTexture(texture.toLowerCase()) !== null) {
                    texture = getCustomTexture(texture.toLowerCase());
                }

                const modIcon = findModIcon(modId);
                if (!modIcon) {
                    continue;
                }
                let name = texture.replaceAll('_', ' ');
                name = name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');

                pool.push({
                    type: type.toLowerCase(),
                    modId: modId,
                    texture: texture.toLowerCase(),
                    name: name,
                    img: '/wiki/assets/general/' + type.toLowerCase() + '/' + modId.toLowerCase() + '/' + texture.toLowerCase() + '.png',
                    modIcon: modIcon
                });
            }
        }
    });

    return pool;
}

function findModIcon(modId) {
    return modIcons.find(m => m.url.toLowerCase() === modId.toLowerCase());
}

function pickRandom(arr, n) {
    const copy = [...arr];
    const result = [];
    while (result.length < n && copy.length > 0) {
        const idx = Math.floor(Math.random() * copy.length);
        result.push(copy.splice(idx, 1)[0]);
    }
    return result;
}

function newRound() {
    placedCount = 0;

    const byMod = {};
    objectsPool.forEach(o => {
        const key = o.modId.toLowerCase();
        (byMod[key] = byMod[key] || []).push(o);
    });

    const modKeys = Object.keys(byMod);
    if (modKeys.length < 3) {
        return;
    }
    const chosenModKeys = pickRandom(modKeys, 3);
    currentObjects = chosenModKeys.map(key => {
        const options = byMod[key];
        return options[Math.floor(Math.random() * options.length)];
    });

    const correctMods = currentObjects.map(o => o.modIcon);
    const distractorPool = modIcons.filter(m => !correctMods.some(c => c.url === m.url));
    const distractors = pickRandom(distractorPool, Math.min(2, distractorPool.length));

    currentMods = pickRandom([...correctMods, ...distractors], correctMods.length + distractors.length);

    renderRound();
}

function renderRound() {
    const objectsContainer = document.getElementById('quiz-objects');
    const modsContainer = document.getElementById('quiz-mods');
    objectsContainer.innerHTML = '';
    modsContainer.innerHTML = '';

    currentObjects.forEach(obj => {
        const wrapper = document.createElement('div');
        wrapper.className = 'quiz-object-wrapper';

        const img = document.createElement('img');
        img.src = obj.img;
        img.className = 'quiz-object-icon';
        img.draggable = false;
        img.alt = obj.name;

        wrapper.appendChild(img);
        objectsContainer.appendChild(wrapper);

        makeDraggable(wrapper, obj);
    });

    currentMods.forEach(mod => {
        const wrapper = document.createElement('div');
        wrapper.className = 'quiz-mod-target';
        wrapper.dataset.modUrl = mod.url;

        const img = document.createElement('img');
        img.src = '/wiki/assets/general/icons/' + mod.texture + '.png';
        img.className = 'quiz-mod-icon';
        img.alt = mod.tooltip;

        const label = document.createElement('div');
        label.className = 'quiz-mod-label';
        label.textContent = mod.tooltip;

        wrapper.appendChild(img);
        wrapper.appendChild(label);
        modsContainer.appendChild(wrapper);
    });
}

function makeDraggable(wrapper, obj) {
    const img = wrapper.querySelector('img');
    let dragging = false;
    let clone = null;

    img.addEventListener('pointerdown', (e) => {
        if (wrapper.classList.contains('quiz-solved')) {
            return;
        }
        dragging = true;
        img.setPointerCapture(e.pointerId);

        clone = img.cloneNode(true);
        clone.className = 'quiz-object-icon quiz-dragging-clone';
        clone.style.left = (e.clientX - 24) + 'px';
        clone.style.top = (e.clientY - 24) + 'px';
        document.body.appendChild(clone);

        wrapper.classList.add('quiz-hidden-original');
    });

    img.addEventListener('pointermove', (e) => {
        if (!dragging || !clone) {
            return;
        }
        clone.style.left = (e.clientX - 24) + 'px';
        clone.style.top = (e.clientY - 24) + 'px';
    });

    const endDrag = (e) => {
        if (!dragging) {
            return;
        }
        dragging = false;

        const dropX = e.clientX;
        const dropY = e.clientY;

        if (clone) {
            clone.remove();
            clone = null;
        }
        wrapper.classList.remove('quiz-hidden-original');

        const target = document.elementFromPoint(dropX, dropY);
        const modTarget = target ? target.closest('.quiz-mod-target') : null;

        if (modTarget) {
            handleDrop(wrapper, obj, modTarget, dropX, dropY);
        }
    };

    img.addEventListener('pointerup', endDrag);
    img.addEventListener('pointercancel', () => {
        dragging = false;
        if (clone) {
            clone.remove();
            clone = null;
        }
        wrapper.classList.remove('quiz-hidden-original');
    });
}

function handleDrop(wrapper, obj, modTarget, x, y) {
    total++;
    const correct = modTarget.dataset.modUrl.toLowerCase() === obj.modId.toLowerCase();

    if (correct) {
        score++;
        spawnSparks(x, y, 'green');

        const badge = document.createElement('img');
        badge.src = obj.img;
        badge.className = 'quiz-solved-badge';
        modTarget.appendChild(badge);

        wrapper.classList.add('quiz-solved');
        wrapper.style.visibility = 'hidden';

        placedCount++;
        if (placedCount >= currentObjects.length) {
            setTimeout(newRound, 1200);
        }
    } else {
        spawnSparks(x, y, 'red');
    }

    updateScoreDisplay();
}

function updateScoreDisplay() {
    const scoreEl = document.getElementById('quiz-score-value');
    const totalEl = document.getElementById('quiz-total-value');
    if (scoreEl) scoreEl.textContent = score;
    if (totalEl) totalEl.textContent = total;
}

function spawnSparks(x, y, color) {
    const sparkCount = 12;
    for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        spark.className = 'quiz-spark quiz-spark-' + color;

        const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() * 0.3 - 0.15);
        const distance = 40 + Math.random() * 30;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        spark.style.left = x + 'px';
        spark.style.top = y + 'px';
        spark.style.setProperty('--dx', dx + 'px');
        spark.style.setProperty('--dy', dy + 'px');

        document.body.appendChild(spark);
        spark.addEventListener('animationend', () => spark.remove());
    }
}