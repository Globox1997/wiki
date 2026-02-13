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

        case 'dragon_scale_boots':
            return 'dragon_boots';
        case 'dragon_scale_leggings':
            return 'dragon_leggings';
        case 'dragon_scale_chestplate':
            return 'dragon_chestplate';
        case 'dragon_scale_helmet':
            return 'dragon_helmet';
        case 'winged_dragon_scale_chestplate':
            return 'upgraded_dragon_chestplate';

        case 'attack_speed_i_gem':
            return 'attack_speed_1_gem';
        case 'attack_speed_ii_gem':
            return 'attack_speed_2_gem';
        case 'attack_speed_iii_gem':
            return 'attack_speed_3_gem';
        case 'attack_speed_iv_gem':
            return 'attack_speed_4_gem';
        case 'attack_speed_v_gem':
            return 'attack_speed_5_gem';

        case 'defense_i_gem':
            return 'defense_1_gem';
        case 'defense_ii_gem':
            return 'defense_2_gem';
        case 'defense_iii_gem':
            return 'defense_3_gem';
        case 'defense_iv_gem':
            return 'defense_4_gem';
        case 'defense_v_gem':
            return 'defense_5_gem';

        case 'health_i_gem':
            return 'health_1_gem';
        case 'health_ii_gem':
            return 'health_2_gem';
        case 'health_iii_gem':
            return 'health_3_gem';
        case 'health_iv_gem':
            return 'health_4_gem';
        case 'health_v_gem':
            return 'health_5_gem';

        case 'speed_i_gem':
            return 'speed_1_gem';
        case 'speed_ii_gem':
            return 'speed_2_gem';
        case 'speed_iii_gem':
            return 'speed_3_gem';
        case 'speed_iv_gem':
            return 'speed_4_gem';
        case 'speed_v_gem':
            return 'speed_5_gem';

        case 'strength_i_gem':
            return 'strength_1_gem';
        case 'strength_ii_gem':
            return 'strength_2_gem';
        case 'strength_iii_gem':
            return 'strength_3_gem';
        case 'strength_iv_gem':
            return 'strength_4_gem';
        case 'strength_v_gem':
            return 'strength_5_gem';

        default:
            return null;
    }
}
