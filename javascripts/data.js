window.addEventListener('load', () => {
    window.requestAnimationFrame(countUpAnimation);
});

async function countUpAnimation(timestamp) {
    if (document.getElementsByClassName('count-up-element' != null)) {
        let duration = 1000;
        const startNumber = 0;

        const elements = document.getElementsByClassName('count-up-element');

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.getAttribute('duration')) {
                duration = parseInt(element.getAttribute('duration'));
            }
            var endNumber = 0;
            if (element.getAttribute('max-count')) {
                endNumber = parseInt(element.getAttribute('max-count'));
            } else if (element.getAttribute('src')) {
                file = 'curseforge';
                if (element.getAttribute('file')) {
                    file = element.getAttribute('file');
                }
                endNumber = await data(file, element.getAttribute('src'))
            }
            const currentTime = Math.min(timestamp, startNumber + duration);
            const progress = (currentTime - startNumber) / duration;
            const number = Math.floor(progress * endNumber);

            element.textContent = number.toLocaleString();
        }
        if (timestamp < startNumber + duration) {
            window.requestAnimationFrame(countUpAnimation);
        }
    }
}


async function data(file, src) {
    if (typeof file !== 'undefined') {
        try {
            const response = await fetch('/wiki/data/' + file + '_collected.json');
            const data = await response.json();
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
            const response = await fetch('/wiki/data/' + file + '_collected.json');
            const data = await response.json();
            return data[src];
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return 'NaN';
}