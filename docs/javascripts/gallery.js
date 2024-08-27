window.addEventListener('DOMContentLoaded', () => {
    iconGallery();
    resourceGallery();
});

function iconGallery() {
    if (document.getElementById('icon-gallery') != null) {
        // Get the gallery element
        const gallery = document.getElementById('icon-gallery');

        // Create and append the icons to the gallery
        icons.forEach((iconData) => {
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
        const icons = [
            { texture: 'medievalmusic_icon', url: 'MedievalMusic', tooltip: 'MedievalMusic' }
        ];

        // Get the gallery element
        const gallery = document.getElementById('resource-gallery');

        // Create and append the icons to the gallery
        icons.forEach((iconData) => {
            const icon = document.createElement('img');
            icon.src = '/wiki/assets/general/icons/' + iconData.texture + '.png';
            icon.className = 'icon';

            tooltip(icon, iconData.tooltip, iconData.url, true);
            gallery.appendChild(icon);
        });
    }
}