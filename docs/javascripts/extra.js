function countUpAnimation(timestamp) {
    let duration = 3000;
    const startNumber = 0;

    const elements = document.getElementsByClassName('count-up-element');

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        duration = parseInt(element.getAttribute('duration'));
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

if (window.location.href === 'https://globox1997.github.io/wiki/') {
    window.addEventListener('load', () => {
        window.requestAnimationFrame(countUpAnimation);
    });
}

if (window.location.href === 'https://globox1997.github.io/wiki/mods/') {
    window.addEventListener('load', () => {
        iconGallery();
    });
}

function iconGallery() {

    const icons = [
        { texture: 'additionz_icon', url: 'AdditionZ', tooltip: 'AdditionZ' },
        { texture: 'adventurez_icon', url: 'AdventureZ', tooltip: 'AdventureZ' },
        { texture: 'backslot_icon', url: 'BackSlot', tooltip: 'BackSlot' },
        { texture: 'backslotaddon_icon', url: 'BackSlotAddon', tooltip: 'BackSlotAddon' },
        { texture: 'dehydration_icon', url: 'Dehydration', tooltip: 'Dehydration' },
        { texture: 'dragonloot_icon', url: 'DragonLoot', tooltip: 'DragonLoot' },
        { texture: 'dualwield_icon', url: 'DualWielding', tooltip: 'DualWielding' },
        { texture: 'dungeonz_icon', url: 'DungeonZ', tooltip: 'DungeonZ' },
        { texture: 'earlystage_icon', url: 'EarlyStage', tooltip: 'EarlyStage' },
        { texture: 'environmentz_icon', url: 'EnvironmentZ', tooltip: 'EnvironmentZ' },
        { texture: 'event_icon', url: 'EventMod', tooltip: 'EventMod' },
        { texture: 'fireplacemode_icon', url: 'FireplaceMode', tooltip: 'FireplaceMode' },
        { texture: 'fleshz_icon', url: 'FleshZ', tooltip: 'FleshZ' },
        { texture: 'herdspanic_icon', url: 'HerdsPanic', tooltip: 'HerdsPanic' },
        { texture: 'inmisaddon_icon', url: 'InmisAddon', tooltip: 'InmisAddon' },
        { texture: 'jobsaddon_icon', url: 'JobsAddon', tooltip: 'JobsAddon' },
        { texture: 'levelz_icon', url: 'LevelZ', tooltip: 'LevelZ' },
        { texture: 'libz_icon', url: 'LibZ', tooltip: 'LibZ' },
        { texture: 'medievalmusic_icon', url: 'MedievalMusic', tooltip: 'MedievalMusic' },
        { texture: 'medievalweapons_icon', url: 'MedievalWeapons', tooltip: 'MedievalWeapons' },
        { texture: 'nameplate_icon', url: 'Nameplate', tooltip: 'Nameplate' },
        { texture: 'numismaticclaim_icon', url: 'NumismaticClaim', tooltip: 'NumismaticClaim' },
        { texture: 'partyaddon_icon', url: 'PartyAddon', tooltip: 'PartyAddon' },
        { texture: 'patchoulibutton_icon', url: 'PatchouliButton', tooltip: 'PatchouliButton' },
        { texture: 'reciperemover_icon', url: 'RecipeRemover', tooltip: 'RecipeRemover' },
        { texture: 'revive_icon', url: 'Revive', tooltip: 'Revive' },
        { texture: 'rpgdifficulty_icon', url: 'RpgDifficulty', tooltip: 'RpgDifficulty' },
        { texture: 'rpgloot_icon', url: 'RpgZ', tooltip: 'RpgZ' },
        { texture: 'spoiled_icon', url: 'SpoiledZ', tooltip: 'SpoiledZ' },
        { texture: 'talkbubbles_icon', url: 'TalkBubbles', tooltip: 'TalkBubbles' },
        { texture: 'tiered_icon', url: 'TieredZ', tooltip: 'TieredZ' },
        { texture: 'tooltiprareness_icon', url: 'TooltipRareness', tooltip: 'TooltipRareness' },
        { texture: 'villagerquests_icon', url: 'VillagerQuests', tooltip: 'VillagerQuests' },
        { texture: 'villagertradefix_icon', url: 'VillagerTradeFix', tooltip: 'VillagerTradeFix' },
        { texture: 'voidz_icon', url: 'VoidZ', tooltip: 'VoidZ' }
    ];

    // Get the gallery element
    const gallery = document.getElementById('icon-gallery');

    // Create and append the icons to the gallery
    icons.forEach((iconData) => {
        const icon = document.createElement('img');
        icon.src = '/wiki/assets/general/icons/' + iconData.texture + '.png';
        icon.className = 'icon';
        // icon.title = iconData.tooltip;

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = iconData.tooltip;

        icon.addEventListener('mouseenter', () => {
            icon.addEventListener('mousemove', () => {
                tooltip.style.left = (event.pageX + 5) + "px";
                tooltip.style.top = (event.pageY) + "px";
            });
            document.body.appendChild(tooltip);
        });
        icon.addEventListener('mouseleave', () => {
            document.body.removeChild(tooltip);
        });

        icon.addEventListener('click', () => {
            window.location.href = 'https://globox1997.github.io/wiki/mods/' + iconData.url;
        });
        //   icon.appendChild(tooltip);
        gallery.appendChild(icon);
    });
}
