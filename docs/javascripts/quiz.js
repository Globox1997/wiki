window.addEventListener('load', () => {
    initQuiz();
});

let objectsPool = [];
let currentObjects = [];
let currentMods = [];
let score = 0;
let total = 0;
let placedCount = 0;

const TIMED_SECONDS = 60;
const BEST_KEY = 'quiz-best-timed';
let quizMode = 'classic';
let quizLocked = false;
let timerId = null;
let timeLeft = 0;
let roundId = 0;

function initQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) {
        return;
    }
    objectsPool = collectObjects();
    if (objectsPool.length < 3) {
        return;
    }
    document.getElementById('quiz-mode-classic')?.addEventListener('click', startClassic);
    document.getElementById('quiz-mode-timed')?.addEventListener('click', startTimed);
    updateBestDisplay();
    startClassic();
}

function resetQuiz(mode) {
    clearInterval(timerId);
    timerId = null;
    quizMode = mode;
    quizLocked = false;
    score = 0;
    total = 0;
    document.getElementById('quiz-result').hidden = true;
    document.getElementById('quiz-timer').hidden = mode !== 'timed';
    document.getElementById('quiz-mode-classic').classList.toggle('md-button--primary', mode === 'classic');
    document.getElementById('quiz-mode-timed').classList.toggle('md-button--primary', mode === 'timed');
    updateScoreDisplay();
}

function startClassic() {
    resetQuiz('classic');
    newRound();
}

function startTimed() {
    resetQuiz('timed');
    timeLeft = TIMED_SECONDS;
    updateTimerDisplay();
    timerId = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            endTimed();
        }
    }, 1000);
    newRound();
}

function endTimed() {
    clearInterval(timerId);
    timerId = null;
    quizLocked = true;
    roundId++;

    const best = readBest();
    const isBest = score > best;
    if (isBest) {
        writeBest(score);
        updateBestDisplay();
    }

    document.getElementById('quiz-objects').innerHTML = '';
    document.getElementById('quiz-mods').innerHTML = '';

    const result = document.getElementById('quiz-result');
    result.textContent = '';
    const headline = document.createElement('div');
    headline.className = 'quiz-result-headline';
    headline.textContent = score === 42 ? 'The answer to everything!' : isBest ? 'New personal best!' : 'Time\'s up!';
    const details = document.createElement('div');
    const accuracy = total > 0 ? Math.round(score / total * 100) : 0;
    details.textContent = score + ' correct in ' + TIMED_SECONDS + ' seconds (' + accuracy + '% accuracy)';
    const again = document.createElement('button');
    again.className = 'md-button md-button--primary';
    again.textContent = 'Play again';
    again.addEventListener('click', startTimed);
    result.appendChild(headline);
    result.appendChild(details);
    result.appendChild(again);
    result.hidden = false;
}

function updateTimerDisplay() {
    const timeEl = document.getElementById('quiz-time-value');
    if (timeEl) {
        timeEl.textContent = timeLeft;
        timeEl.parentElement.classList.toggle('quiz-timer-low', timeLeft <= 10);
    }
}

function readBest() {
    try {
        return parseInt(localStorage.getItem(BEST_KEY)) || 0;
    } catch (error) {
        return 0;
    }
}

function writeBest(value) {
    try {
        localStorage.setItem(BEST_KEY, value);
    } catch (error) {
    }
}

function updateBestDisplay() {
    const bestEl = document.getElementById('quiz-best-value');
    if (bestEl) {
        bestEl.textContent = readBest();
    }
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
    if (quizLocked) {
        return;
    }
    roundId++;
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
        if (wrapper.classList.contains('quiz-solved') || quizLocked) {
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
    if (quizLocked) {
        return;
    }
    total++;
    const correct = modTarget.dataset.modUrl.toLowerCase() === obj.modId.toLowerCase();

    if (correct) {
        score++;
        if (score === 42 && typeof showAdvancement === 'function') {
            showAdvancement({ title: 'Challenge Complete!', text: 'The answer to everything!', kind: 'challenge' });
        }
        spawnSparks(x, y, 'green');

        const badge = document.createElement('img');
        badge.src = obj.img;
        badge.className = 'quiz-solved-badge';
        modTarget.appendChild(badge);

        wrapper.classList.add('quiz-solved');
        wrapper.style.visibility = 'hidden';

        placedCount++;
        if (placedCount >= currentObjects.length) {
            const finishedRound = roundId;
            setTimeout(() => {
                if (finishedRound === roundId) {
                    newRound();
                }
            }, quizMode === 'timed' ? 300 : 1200);
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