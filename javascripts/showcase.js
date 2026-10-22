window.addEventListener('load', () => {
    showcaseGallery();
});

let currentShowcaseId = 0;
let showcaseRun = 0;
let activeShowcase = null;

document.addEventListener('keydown', (event) => {
    if (activeShowcase === null || !document.getElementById('large-showcase')) {
        return;
    }
    const { modid, showcases } = activeShowcase;
    if (event.key === 'Escape') {
        closeLargerImage(null, true);
    } else if (event.key === 'ArrowRight') {
        showcaseRun++;
        setShowcase(modid, showcases, (currentShowcaseId + 1) % showcases.length);
    } else if (event.key === 'ArrowLeft') {
        showcaseRun++;
        setShowcase(modid, showcases, (currentShowcaseId - 1 + showcases.length) % showcases.length);
    } else {
        return;
    }
    event.preventDefault();
});

function showcaseGallery() {
    if (document.getElementById('showcase-gallery') != null) {
        const modid = document.getElementById('showcase-gallery').getAttribute('modid');
        let showcases = [];
        for (let i = 1; i < 5; i++) {
            if (document.getElementById('showcase-gallery').getAttribute('image_' + i) != null) {
                showcases.push(document.getElementById('showcase-gallery').getAttribute('image_' + i));
            }
        }
        for (let u = 0; u < showcases.length; u++) {
            const showcase = document.createElement('img');
            showcase.src = showcaseSrc(modid, showcases[u]);
            showcase.className = 'showcase';
            showcase.loading = 'lazy';
            showcase.onclick = () => {
                showLargerImage(modid, showcases, u);
                autoShowcase(modid, showcases, ++showcaseRun);
            };
            document.getElementById('showcase-gallery').appendChild(showcase);
        }
    }
}

function showcaseSrc(modid, image) {
    return '/wiki/assets/' + modid + '/showcases/' + image + '.png';
}

function setShowcase(modid, showcases, id) {
    currentShowcaseId = id;
    document.getElementById('showcase').src = showcaseSrc(modid, showcases[id]);
}

function showLargerImage(modid, showcases, id) {
    const largeShowcaseDiv = document.createElement('div');
    largeShowcaseDiv.id = 'large-showcase';
    largeShowcaseDiv.className = 'showcase-overlay';
    largeShowcaseDiv.style.display = 'block';
    largeShowcaseDiv.onclick = (event) => closeLargerImage(event, false, modid, showcases);

    const largeShowcase = document.createElement('img');
    largeShowcase.id = "showcase";
    largeShowcase.className = 'showcase-overlay-content';
    largeShowcaseDiv.appendChild(largeShowcase);
    document.getElementById('showcase-gallery').appendChild(largeShowcaseDiv);
    activeShowcase = { modid, showcases };
    setShowcase(modid, showcases, id);
}

function closeLargerImage(event, close, modid, showcases) {
    showcaseRun++;
    const largeShowcaseDiv = document.getElementById('large-showcase');
    if (largeShowcaseDiv === null) {
        return;
    }
    if (close) {
        largeShowcaseDiv.remove();
        return;
    }

    const center = largeShowcaseDiv.getBoundingClientRect().left + largeShowcaseDiv.offsetWidth / 2;
    const halfImageWidth = document.getElementById('showcase').getBoundingClientRect().width / 2;

    if (event.clientX > center + halfImageWidth) {
        setShowcase(modid, showcases, (currentShowcaseId + 1) % showcases.length);
    } else if (event.clientX < center - halfImageWidth) {
        setShowcase(modid, showcases, (currentShowcaseId - 1 + showcases.length) % showcases.length);
    } else {
        largeShowcaseDiv.remove();
    }
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function autoShowcase(modid, showcases, run) {
    while (true) {
        await delay(4000);
        if (run !== showcaseRun || !document.getElementById('large-showcase')) {
            return;
        }
        if (currentShowcaseId + 1 < showcases.length) {
            setShowcase(modid, showcases, currentShowcaseId + 1);
        } else {
            closeLargerImage(null, true);
            return;
        }
    }
}
