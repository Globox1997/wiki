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

// duplicated at overview.js
function getCustomTexture(texture) {
    switch (texture) {
        case 'blackstones_arm':
            return 'blackstone_golem_arm';
        case 'wooden_battle_axe':
            return 'wooden_small_axe';
        case 'wooden_longsword':
            return 'wooden_long_sword';
        case 'wooden_staff_of_healing':
            return 'wooden_healing_staff';
        case 'wooden_war_axe':
            return 'wooden_big_axe';

        case 'stone_battle_axe':
            return 'stone_small_axe';
        case 'stone_longsword':
            return 'stone_long_sword';
        case 'stone_staff_of_healing':
            return 'stone_healing_staff';
        case 'stone_war_axe':
            return 'stone_big_axe';

        case 'golden_battle_axe':
            return 'golden_small_axe';
        case 'golden_longsword':
            return 'golden_long_sword';
        case 'golden_staff_of_healing':
            return 'golden_healing_staff';
        case 'golden_war_axe':
            return 'golden_big_axe';

        case 'iron_battle_axe':
            return 'iron_small_axe';
        case 'iron_longsword':
            return 'iron_long_sword';
        case 'iron_staff_of_healing':
            return 'iron_healing_staff';
        case 'iron_war_axe':
            return 'iron_big_axe';

        case 'diamond_battle_axe':
            return 'diamond_small_axe';
        case 'diamond_longsword':
            return 'diamond_long_sword';
        case 'diamond_staff_of_healing':
            return 'diamond_healing_staff';
        case 'diamond_war_axe':
            return 'diamond_big_axe';

        case 'netherite_battle_axe':
            return 'netherite_small_axe';
        case 'netherite_longsword':
            return 'netherite_long_sword';
        case 'netherite_staff_of_healing':
            return 'netherite_healing_staff';
        case 'netherite_war_axe':
            return 'netherite_big_axe';

        default:
            return null;
    }
}
