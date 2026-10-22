window.addEventListener('load', () => {
    startCountUp(document.getElementsByClassName('count-up-element'));
});

const dataFileCache = new Map();

function loadDataFile(file) {
    if (!dataFileCache.has(file)) {
        dataFileCache.set(file, fetch('/wiki/data/' + file + '_collected.json').then(response => {
            if (!response.ok) {
                throw new Error('Could not load ' + file + '_collected.json: ' + response.status);
            }
            return response.json();
        }));
    }
    return dataFileCache.get(file);
}

async function startCountUp(elements) {
    for (const element of Array.from(elements)) {
        if (element.dataset.countUpStarted) {
            continue;
        }
        element.dataset.countUpStarted = 'true';

        let duration = 1000;
        if (element.getAttribute('duration')) {
            duration = parseInt(element.getAttribute('duration'));
        }

        let endNumber = 0;
        if (element.getAttribute('max-count')) {
            endNumber = parseInt(element.getAttribute('max-count'));
        } else if (element.getAttribute('src')) {
            let file = 'curseforge';
            if (element.getAttribute('file')) {
                file = element.getAttribute('file');
            }
            endNumber = await data(file, element.getAttribute('src'));
        }

        if (isNaN(endNumber) || endNumber < 0) {
            element.textContent = '-';
            continue;
        }
        animateCount(element, endNumber, duration);
    }
}

function animateCount(element, endNumber, duration) {
    let startTime = null;

    function step(timestamp) {
        if (startTime === null) {
            startTime = timestamp;
        }
        const progress = Math.min((timestamp - startTime) / duration, 1);
        element.textContent = Math.floor(progress * endNumber).toLocaleString();

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

async function data(file, src) {
    if (typeof file !== 'undefined') {
        try {
            const data = await loadDataFile(file);
            if (src == 'mods') {
                return Object.keys(data).length - 3;
            } else {
                return parseInt(data[src]);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return -1;
}

async function getRepositoryData(file, src) {
    if (typeof file !== 'undefined') {
        try {
            const data = await loadDataFile(file);
            return data[src];
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return undefined;
}
