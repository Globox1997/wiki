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

if (window.location.pathname.includes('Entities') || window.location.pathname.includes('Items')) {
    window.addEventListener('load', () => {
        icon();
    });
}

if (window.location.pathname.includes('Items')) {
    window.addEventListener('load', () => {
        crafting();
    });
}

// vanilla_crafting; smithing; furnace_smelting;
function crafting() {
    if (document.getElementsByClassName('crafting-element' != null)) {

        const vanillaCraftingPositions = [[1, [10, 10]], [2, [46, 10]], [3, [82, 10]], [4, [10, 46]], [5, [46, 46]], [6, [82, 46]], [7, [10, 82]], [8, [46, 82]], [9, [82, 82]], ['output', [202, 46]]];
        const smithingPositions = [[1, [10, 10]], [2, [46, 10]], [3, [82, 10]], ['output', [198, 10]]];
        const furnaceSmeltingPositions = [[1, [10, 18]], ['output', [130, 118]]];

        const recipePositionMap = new Map([['vanilla_crafting', new Map(vanillaCraftingPositions)], ['smithing', new Map(smithingPositions)], ['furnace_smelting', new Map(furnaceSmeltingPositions)]]);

        const elements = document.getElementsByClassName('crafting-element');
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            var type = element.getAttribute('crafting-type');

            const mainDiv = document.createElement('div');
            mainDiv.style.position = 'relative';
            mainDiv.style.width = '252px';
            mainDiv.style.height = '124px';

            const backgrounDiv = document.createElement('div');
            backgrounDiv.style.position = 'absolute';
            const background = document.createElement('img');
            background.src = '/wiki/assets/general/recipe/' + type + '_background.png';
            background.className = 'recipe';
            background.alt = '';
            backgrounDiv.appendChild(background);
            mainDiv.appendChild(backgrounDiv);

            const recipePositions = recipePositionMap.get(type);

            // Ingredients
            const ingredients = element.textContent.substring(element.textContent.indexOf('input[') + 6, element.textContent.indexOf(']')).split(";");
            for (let u = 0; u < ingredients.length; u++) {
                const ingredient = ingredients[u].split('=');

                if (ingredient[1].includes(':')) {
                    ingredient[1] = ingredient[1].replace(':', '/');
                } else {
                    ingredient[1] = 'vanilla/' + ingredient[1];
                }

                const div = document.createElement('div');
                div.style.position = 'absolute';
                div.style.width = '32px';
                div.style.height = '32px';
                div.style.left = recipePositions.get(parseInt(ingredient[0]))[0] + 'px';
                div.style.top = recipePositions.get(parseInt(ingredient[0]))[1] + 'px';

                const item = document.createElement('img');
                item.src = '/wiki/assets/general/items/' + ingredient[1] + '.png';
                item.alt = '';

                div.appendChild(item);
                mainDiv.appendChild(div);
            }

            // Output
            var output = element.textContent.substring(element.textContent.indexOf('output[') + 7, element.textContent.lastIndexOf(']'));
            if (output.includes(':')) {
                output = output.replace(':', '/');
            } else {
                output = 'vanilla/' + output;
            }
            const div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.width = '32px';
            div.style.height = '32px';
            div.style.left = recipePositions.get('output')[0] + 'px';
            div.style.top = recipePositions.get('output')[1] + 'px';

            const item = document.createElement('img');
            item.src = '/wiki/assets/general/items/' + output + '.png';
            item.alt = '';
            div.appendChild(item);
            mainDiv.appendChild(div);

            // mainDiv
            element.textContent = "";
            element.appendChild(mainDiv);
        }
    }
}

function countUpAnimation(timestamp) {
    if (document.getElementsByClassName('count-up-element' != null)) {
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
}

function icon() {
    if (document.getElementsByClassName('icon-element') != null) {
        const elements = document.getElementsByClassName('icon-element');
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];

            var count = parseInt(element.getAttribute('icon-count'));
            var id = element.getAttribute('icon-id');

            if (id === 'experience') {
                var imageElementString = '<img src="../../../../assets/general/misc/' + id + '.gif" alt="">';
            } else {
                var imageElementString = '<img src="../../../../assets/general/misc/' + id + '.png"  alt="" style="transform: scale(1.4) translate(0,1px); padding: 0.4%;">';
            }

            var htmlString = count + ' (' + imageElementString.repeat(count / 2) + ')';
            if (count > 20) {
                htmlString = count + ' (' + imageElementString + ' × ' + count / 2 + ')';
            }
            if (element.hasAttribute('icon-exclusive')) {
                htmlString = count + ' ' + imageElementString;
            }
            element.innerHTML = htmlString;
        }
    }
}

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
}
