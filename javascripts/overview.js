window.addEventListener('load', () => {
    overview();
});

function overview() {
    var items = document.getElementById('items_overview')
    var blocks = document.getElementById('blocks_overview')
    var entities = document.getElementById('entities_overview')

    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        if (element.classList.contains("md-nav") && element.getAttribute('data-md-level') !== null && element.getAttribute('data-md-level') == 3) {
            const navItems = element.getElementsByClassName('md-nav__item');
            for (let i = 0; i < navItems.length; i++) {
                const navItem = navItems[i];

                let textureSplit = navItem.querySelector('a').href.split('/');
                let type = textureSplit[textureSplit.length - 3];

                if (types.some(str => type.toLowerCase().includes(str))) {
                    let modId = textureSplit[textureSplit.length - 4];
                    let texture = textureSplit[textureSplit.length - 2];

                    if (getCustomTexture(texture.toLowerCase()) !== null) {
                        texture = getCustomTexture(texture.toLowerCase());
                    }

                    const link = document.createElement('a');
                    link.href = navItem.querySelector('a').href;
                    link.textContent = navItem.querySelector('a').textContent;

                    if (type.toLowerCase() !== 'entities') {
                        var icon = document.createElement('img');

                        icon.src = '/wiki/assets/general/' + type.toLowerCase() + '/' + modId.toLowerCase() + '/' + texture.toLowerCase() + '.png';

                        var text = texture.replaceAll('_', ' ');
                        tooltip(icon, text, link, false);

                        if (type.toLowerCase() === 'items') {
                            items.appendChild(icon);
                        } else if (type.toLowerCase() === 'blocks') {
                            blocks.appendChild(icon);
                        }
                    } else {
                        entities.appendChild(link);
                    }
                }
            }
        }
    });
}

// duplicated at info.js
function getCustomTexture(texture) {
    switch (texture) {
        case 'blackstones_arm':
            return 'blackstone_golem_arm';

        default:
            return null;
    }
}
