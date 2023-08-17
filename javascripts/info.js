window.addEventListener('load', () => {
    list();
});

const adventurezItems = [
    { texture: 'chorus_fruit_on_a_stick', url: 'Items/Chorus_Fruit_on_a_Stick', text: 'Chorus Fruit on a Stick' },
    { texture: 'cooked_ender_whale_meat', url: 'Items/Cooked_Ender_Whale_Meat', text: 'Cooked Ender Whale Meat' },
    { texture: 'cooked_iguana_meat', url: 'Items/Cooked_Iguana_Meat', text: 'Cooked Iguana Meat' },
    { texture: 'cooked_mammoth_meat', url: 'Items/Cooked_Mammoth_Meat', text: 'Cooked Mammoth Meat' },
    { texture: 'cooked_rhino_meat', url: 'Items/Cooked_Rhino_Meat', text: 'Cooked Rhino Meat' },
    { texture: 'cooked_venison', url: 'Items/Cooked_Venison', text: 'Cooked Venison' },
    { texture: 'cooked_warthog_meat', url: 'Items/Cooked_Warthog_Meat', text: 'Cooked Warthog Meat' },
    { texture: 'dragon_saddle', url: 'Items/Dragon_Saddle', text: 'Dragon Saddle' },
    { texture: 'ender_flute', url: 'Items/Ender_Flute', text: 'Ender Flute' },
    { texture: 'ender_whale_meat', url: 'Items/Ender_Whale_Meat', text: 'Ender Whale Meat' },
    { texture: 'ender_whale_skin', url: 'Items/Ender_Whale_Skin', text: 'Ender Whale Skin' },
    { texture: 'gilded_netherite_fragment', url: 'Items/Gilded_Netherite_Fragment', text: 'Gilded Netherite Fragment' },
    { texture: 'gilded_stone', url: 'Items/Gilded_Stone', text: 'Gilded Stone' },
    { texture: 'handbook', url: 'Items/Handbook', text: 'Handbook' },
    { texture: 'iguana_hide', url: 'Items/Iguana_Hide', text: 'Iguana Hide' },
    { texture: 'iguana_meat', url: 'Items/Iguana_Meat', text: 'Iguana Meat' },
    { texture: 'ivory_arrow', url: 'Items/Ivory_Arrow', text: 'Ivory Arrow' },
    { texture: 'mammoth_fur', url: 'Items/Mammoth_Fur', text: 'Mammoth Fur' },
    { texture: 'mammoth_meat', url: 'Items/Mammoth_Meat', text: 'Mammoth Meat' },
    { texture: 'mammoth_tusk', url: 'Items/Mammoth_Tusk', text: 'Mammoth Tusk' },
    { texture: 'orc_skin', url: 'Items/Orc_Skin', text: 'Orc Skin' },
    { texture: 'piglin_flag_block', url: 'Items/Piglin_Flag_Block', text: 'Piglin Flag Block' },
    { texture: 'prime_eye', url: 'Items/Prime_Eye', text: 'Prime Eye' },
    { texture: 'raw_venison', url: 'Items/Raw_Venison', text: 'Raw Venison' },
    { texture: 'rhino_leather', url: 'Items/Rhino_Leather', text: 'Rhino Leather' },
    { texture: 'rhino_meat', url: 'Items/Rhino_Meat', text: 'Rhino Meat' },
    { texture: 'source_stone', url: 'Items/Source_Stone', text: 'Source Stone' },
    { texture: 'stone_golem_arm', url: 'Items/Stone_Golem_Arm', text: 'Stone Golem Arm' },
    { texture: 'stone_golem_boots', url: 'Items/Stone_Golem_Boots', text: 'Stone Golem Boots' },
    { texture: 'stone_golem_chestplate', url: 'Items/Stone_Golem_Chestplate', text: 'Stone Golem Chestplate' },
    { texture: 'stone_golem_heart', url: 'Items/Stone_Golem_Heart', text: 'Stone Golem Heart' },
    { texture: 'stone_golem_helmet', url: 'Items/Stone_Golem_Helmet', text: 'Stone Golem Helmet' },
    { texture: 'stone_golem_leggings', url: 'Items/Stone_Golem_Leggings', text: 'Stone Golem Leggings' },
    { texture: 'warthog_meat', url: 'Items/Warthog_Meat', text: 'Warthog Meat' },
    { texture: 'warthog_shell_piece', url: 'Items/Warthog_Shell_Piece', text: 'Warthog Shell Piece' }
];

const dehydrationItems = [
    { texture: 'bamboo_pump', url: 'Items/Bamboo_Pump', text: 'Bamboo Pump' },
    { texture: 'campfire_cauldron', url: 'Items/Campfire_Cauldron', text: 'Campfire Cauldron' },
    { texture: 'copper_cauldron', url: 'Items/Copper_Cauldron', text: 'Copper Cauldron' },
    { texture: 'diamond_leather_flask', url: 'Items/Diamond_Leather_Flask', text: 'Diamond Leather Flask' },
    { texture: 'empty_leather_flask', url: 'Items/Empty_Leather_Flask', text: 'Empty Leather Flask' },
    { texture: 'golden_leather_flask', url: 'Items/Golden_Leather_Flask', text: 'Golden Leather Flask' },
    { texture: 'handbook', url: 'Items/Handbook', text: 'Handbook' },
    { texture: 'iron_leather_flask', url: 'Items/Iron_Leather_Flask', text: 'Iron Leather Flask' },
    { texture: 'leather_flask', url: 'Items/Leather_Flask', text: 'Leather Flask' },
    { texture: 'netherite_leather_flask', url: 'Items/Netherite_Leather_Flask', text: 'Netherite Leather Flask' },
    { texture: 'purified_water_bucket', url: 'Items/Purified_Water_Bucket', text: 'Purified Water Bucket' }
];

function getList(mod, type) {
    switch (mod + ":" + type) {
        case 'adventurez:items':
            return adventurezItems;
        case 'adventurez:block':
            return null;
        case 'dehydration:items':
            return dehydrationItems;
        default:
            return null;
    }
}

function list() {
    if (document.getElementById('list') != null) {
        const element = document.getElementById('list');
        element.className = 'icon-list-container';
        if (getList(element.getAttribute("mod"), element.getAttribute("type")) != null) {
            getList(element.getAttribute("mod"), element.getAttribute("type")).forEach((iconData) => {
                const icon = document.createElement('img');
                icon.src = '/wiki/assets/general/' + element.getAttribute("type") + '/' + element.getAttribute("mod") + '/' + iconData.texture + '.png';
                icon.className = 'icon-list';

                const link = document.createElement('a');
                link.href = iconData.url;
                link.textContent = iconData.text;

                const listItem = document.createElement('li');
                listItem.appendChild(icon);
                listItem.appendChild(link);

                element.appendChild(listItem);
            });
        }
    }
}

