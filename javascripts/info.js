window.addEventListener('DOMContentLoaded', () => {
    list();
});

function list() {
    if (document.getElementById('list') != null) {
        const element = document.getElementById('list');
        element.className = 'icon-list-container';

        if (document.getElementsByClassName('md-nav') != null) {
            const navElements = document.getElementsByClassName('md-nav');
            for (let i = 0; i < navElements.length; i++) {
                const navElement = navElements[i];
                if (navElement.getAttribute('data-md-level') !== null && navElement.getAttribute('data-md-level') === '3' && navElement.getAttribute('aria-expanded') !== null && navElement.getAttribute('aria-expanded') === 'true') {
                    const navItems = navElement.getElementsByClassName('md-nav__item');
                    for (let i = 0; i < navItems.length; i++) {
                        const navItem = navItems[i];


                        let textureSplit = navItem.querySelector('a').href.split('/');
                        let texture = textureSplit[textureSplit.length - 2].toLowerCase();

                        if (getCustomTexture(texture) !== null) {
                            texture = getCustomTexture(texture);
                        }

                        const listItem = document.createElement('li');

                        const link = document.createElement('a');
                        link.href = navItem.querySelector('a').href;
                        link.textContent = navItem.querySelector('a').textContent;

                        if (element.getAttribute('icons') === null || element.getAttribute('icons') === 'true') {
                            const icon = document.createElement('img');
                            icon.src = '/wiki/assets/general/' + element.getAttribute("type") + '/' + element.getAttribute("mod") + '/' + texture + '.png';
                            icon.className = 'icon-list';
                            listItem.appendChild(icon);
                        }

                        listItem.appendChild(link);

                        element.appendChild(listItem);
                    }
                    break;
                }

            }
        }

    }
}

function getCustomTexture(texture) {
    switch (texture) {
        case 'blackstones_arm':
            return 'blackstone_golem_arm';

        default:
            return null;
    }
}

