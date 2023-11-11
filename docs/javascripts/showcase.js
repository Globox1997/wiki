window.addEventListener('load', () => {
    showcaseGallery();
});

let autoShowcaseRunning = false;
let manualShowcaseId = 0;

function showcaseGallery() {
    if (document.getElementById('showcase-gallery') != null) {
        document.getelem
        const modid = document.getElementById('showcase-gallery').getAttribute('modid');
        let showcases = [];
        for (let i = 1; i < 5; i++) {
            if (document.getElementById('showcase-gallery').getAttribute('image_' + i) != null) {
                showcases.push(document.getElementById('showcase-gallery').getAttribute('image_' + i));
            }
        }
        for (let u = 0; u < showcases.length; u++) {
            const showcase = document.createElement('img');
            showcase.src = '/wiki/assets/' + modid + '/showcases/' + showcases[u] + '.png';
            showcase.className = 'showcase';
            showcase.loading = 'lazy';
            showcase.onclick = () => {
                autoShowcaseRunning = true;
                manualShowcaseId = u;
                showLargerImage(modid, showcases, u);
                autoShowcase(modid, showcases, u);
            };
            document.getElementById('showcase-gallery').appendChild(showcase);
        }
    }
}

function showLargerImage(modid, showcases, id) {
    const largeShowcaseDiv = document.createElement('div');
    largeShowcaseDiv.id = 'large-showcase';
    largeShowcaseDiv.className = 'showcase-overlay';
    largeShowcaseDiv.style.display = 'block';
    largeShowcaseDiv.onclick = (event) => closeLargerImage(event, false, modid, showcases);

    const largeShowcase = document.createElement('img');
    largeShowcase.id = "showcase";
    largeShowcase.src = '/wiki/assets/' + modid + '/showcases/' + showcases[id] + '.png';
    largeShowcase.className = 'showcase-overlay-content';
    largeShowcaseDiv.appendChild(largeShowcase);
    document.getElementById('showcase-gallery').appendChild(largeShowcaseDiv);
}

function closeLargerImage(event, close, modid, showcases) {
    autoShowcaseRunning = false;
    if (close) {
        var largeShowcaseDiv = document.getElementById('large-showcase');
        document.getElementById('showcase-gallery').removeChild(largeShowcaseDiv);
    } else {
        if (event.clientX > document.getElementById('large-showcase').getBoundingClientRect().left + document.getElementById('large-showcase').offsetWidth / 2 + document.getElementById('showcase').getBoundingClientRect().width / 2) {
            console.log(manualShowcaseId)
            if (showcases.length > manualShowcaseId + 1) {
                document.getElementById("showcase").src = '/wiki/assets/' + modid + '/showcases/' + showcases[manualShowcaseId + 1] + '.png';
                manualShowcaseId++;
            } else {
                document.getElementById("showcase").src = '/wiki/assets/' + modid + '/showcases/' + showcases[0] + '.png';
                manualShowcaseId = 0;
            }
        } else if (event.clientX < document.getElementById('large-showcase').getBoundingClientRect().left + document.getElementById('large-showcase').offsetWidth / 2 - document.getElementById('showcase').getBoundingClientRect().width / 2) {

            console.log(manualShowcaseId)
            if (0 <= manualShowcaseId - 1) {
                document.getElementById("showcase").src = '/wiki/assets/' + modid + '/showcases/' + showcases[manualShowcaseId - 1] + '.png';
                manualShowcaseId--;
            } else {
                document.getElementById("showcase").src = '/wiki/assets/' + modid + '/showcases/' + showcases[showcases.length - 1] + '.png';
            }
        } else {
            var largeShowcaseDiv = document.getElementById('large-showcase');
            document.getElementById('showcase-gallery').removeChild(largeShowcaseDiv);
        }
    }

}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function autoShowcase(modid, showcases, id) {
    if (!autoShowcaseRunning) {
        return;
    }
    await delay(4000);
    if (!autoShowcaseRunning) {
        return;
    }
    if (document.getElementById("large-showcase")) {
        if (showcases.length > id + 1) {
            document.getElementById("showcase").src = '/wiki/assets/' + modid + '/showcases/' + showcases[id + 1] + '.png';
            autoShowcase(modid, showcases, id + 1);
        } else {
            closeLargerImage(null, true);
        }
    }
}