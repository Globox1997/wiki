function countUpAnimation(timestamp) {
    const duration = 3000;
    const startNumber = 0;

    const elements = document.getElementsByClassName('count-up-element');

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const maxCount = parseInt(element.getAttribute('max-count'));
        const currentTime = Math.min(timestamp, startNumber + duration);
        const progress = (currentTime - startNumber) / duration;
        const number = Math.floor(progress * maxCount);

        element.textContent = number.toLocaleString();
    }

    if (timestamp < startNumber + duration) {
        window.requestAnimationFrame(countUpAnimation);
    }
}

window.addEventListener('load', () => {
    window.requestAnimationFrame(countUpAnimation);
});