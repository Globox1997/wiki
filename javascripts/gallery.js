window.addEventListener('DOMContentLoaded', () => {
    iconGallery();
    resourceGallery();
    packGallery();
});

function packGallery() {
    if (document.getElementById('pack-gallery') != null) {
        // Get the gallery element
        const gallery = document.getElementById('pack-gallery');

        // Create and append the icons to the gallery
        packIcons.forEach((iconData) => {
            const icon = document.createElement('img');
            icon.src = '/wiki/assets/general/icons/' + iconData.texture + '.png';
            icon.className = 'icon';

            tooltip(icon, iconData.tooltip, iconData.url, false);
            gallery.appendChild(icon);
        });
    }
}

function iconGallery() {
    if (document.getElementById('icon-gallery') != null) {
        // Get the gallery element
        const gallery = document.getElementById('icon-gallery');

        // Create and append the icons to the gallery
        modIcons.forEach((iconData) => {
            const icon = document.createElement('img');
            icon.src = '/wiki/assets/general/icons/' + iconData.texture + '.png';
            icon.className = 'icon';

            tooltip(icon, iconData.tooltip, iconData.url, true);
            gallery.appendChild(icon);
        });
    }
}

function resourceGallery() {
    if (document.getElementById('resource-gallery') != null) {
        // Get the gallery element
        const gallery = document.getElementById('resource-gallery');

        // Create and append the icons to the gallery
        resourceIcons.forEach((iconData) => {
            const icon = document.createElement('img');
            icon.src = '/wiki/assets/general/icons/' + iconData.texture + '.png';
            icon.className = 'icon';

            tooltip(icon, iconData.tooltip, iconData.url, false);
            gallery.appendChild(icon);
        });
    }
}