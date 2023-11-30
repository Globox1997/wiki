window.addEventListener('DOMContentLoaded', () => {
    iconGallery();
    resourceGallery();
});

function iconGallery() {
    if (document.getElementById('icon-gallery') != null) {
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
            { texture: 'fleshz_icon', url: 'FleshZ', tooltip: 'FleshZ' },
            { texture: 'herdspanic_icon', url: 'HerdsPanic', tooltip: 'HerdsPanic' },
            { texture: 'inmisaddon_icon', url: 'InmisAddon', tooltip: 'InmisAddon' },
            { texture: 'jobsaddon_icon', url: 'JobsAddon', tooltip: 'JobsAddon' },
            { texture: 'levelz_icon', url: 'LevelZ', tooltip: 'LevelZ' },
            { texture: 'libz_icon', url: 'LibZ', tooltip: 'LibZ' },
            { texture: 'medievalweapons_icon', url: 'MedievalWeapons', tooltip: 'MedievalWeapons' },
            { texture: 'nameplate_icon', url: 'Nameplate', tooltip: 'Nameplate' },
            { texture: 'numismaticclaim_icon', url: 'NumismaticClaim', tooltip: 'NumismaticClaim' },
            { texture: 'partyaddon_icon', url: 'PartyAddon', tooltip: 'PartyAddon' },
            { texture: 'patchoulibutton_icon', url: 'PatchouliButton', tooltip: 'PatchouliButton' },
            { texture: 'reciperemover_icon', url: 'RecipeRemover', tooltip: 'RecipeRemover' },
            { texture: 'revive_icon', url: 'Revive', tooltip: 'Revive' },
            { texture: 'rewardz_icon', url: 'RewardZ', tooltip: 'RewardZ' },
            { texture: 'rpgdifficulty_icon', url: 'RpgDifficulty', tooltip: 'RpgDifficulty' },
            { texture: 'rpgloot_icon', url: 'RpgZ', tooltip: 'RpgZ' },
            { texture: 'smitherz_icon', url: 'SmitherZ', tooltip: 'SmitherZ' },
            { texture: 'spartanweapons_icon', url: 'SpartanWeapons', tooltip: 'SpartanWeapons' },
            { texture: 'spoiledz_icon', url: 'SpoiledZ', tooltip: 'SpoiledZ' },
            { texture: 'talkbubbles_icon', url: 'TalkBubbles', tooltip: 'TalkBubbles' },
            { texture: 'tiered_icon', url: 'TieredZ', tooltip: 'TieredZ' },
            { texture: 'tooltiprareness_icon', url: 'TooltipRareness', tooltip: 'TooltipRareness' },
            { texture: 'travelerz_icon', url: 'TravelerZ', tooltip: 'TravelerZ' },
            { texture: 'villagerquests_icon', url: 'VillagerQuests', tooltip: 'VillagerQuests' },
            { texture: 'villagertradefix_icon', url: 'VillagerTradeFix', tooltip: 'VillagerTradeFix' },
            { texture: 'voidz_icon', url: 'VoidZ', tooltip: 'VoidZ' },
            { texture: 'welcomescreen_icon', url: 'WelcomeScreen', tooltip: 'WelcomeScreen' }
        ];

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