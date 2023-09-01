window.addEventListener('load', () => {
    showcaseGallery();
});

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
            showcase.onclick = () => showLargerImage(modid, showcases[u]);
            document.getElementById('showcase-gallery').appendChild(showcase);
        }
    }
}

function showLargerImage(modid, imageId) {
    const largeShowcaseDiv = document.createElement('div');
    largeShowcaseDiv.id = 'large-showcase';
    largeShowcaseDiv.className = 'showcase-overlay';
    largeShowcaseDiv.style.display = 'block';
    largeShowcaseDiv.onclick = closeLargerImage;

    const largeShowcase = document.createElement('img');
    largeShowcase.src = '/wiki/assets/' + modid + '/showcases/' + imageId + '.png';
    largeShowcase.className = 'showcase-overlay-content';
    largeShowcaseDiv.appendChild(largeShowcase);
    document.getElementById('showcase-gallery').appendChild(largeShowcaseDiv);
}

function closeLargerImage() {
    var largeShowcaseDiv = document.getElementById('large-showcase');
    document.getElementById('showcase-gallery').removeChild(largeShowcaseDiv);
}