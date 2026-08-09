const modIcons = [
    { texture: 'additionz_icon', url: 'AdditionZ', tooltip: 'AdditionZ' },
    { texture: 'adventurez_icon', url: 'AdventureZ', tooltip: 'AdventureZ' },
    { texture: 'backslot_icon', url: 'BackSlot', tooltip: 'BackSlot' },
    { texture: 'backslotaddon_icon', url: 'BackSlotAddon', tooltip: 'BackSlotAddon' },
    { texture: 'cupellation_icon', url: 'Cupellation', tooltip: 'Cupellation' },
    { texture: 'dehydration_icon', url: 'Dehydration', tooltip: 'Dehydration' },
    { texture: 'dragonloot_icon', url: 'DragonLoot', tooltip: 'DragonLoot' },
    { texture: 'dualwield_icon', url: 'DualWielding', tooltip: 'DualWielding' },
    { texture: 'dungeonz_icon', url: 'DungeonZ', tooltip: 'DungeonZ' },
    { texture: 'earlystage_icon', url: 'EarlyStage', tooltip: 'EarlyStage' },
    { texture: 'environmentz_icon', url: 'EnvironmentZ', tooltip: 'EnvironmentZ' },
    { texture: 'event_icon', url: 'EventMod', tooltip: 'EventMod' },
    { texture: 'fleshz_icon', url: 'FleshZ', tooltip: 'FleshZ' },
    { texture: 'farmz_icon', url: 'FarmZ', tooltip: 'FarmZ' },
    { texture: 'herdspanic_icon', url: 'HerdsPanic', tooltip: 'HerdsPanic' },
    { texture: 'inmisaddon_icon', url: 'InmisAddon', tooltip: 'InmisAddon' },
    { texture: 'jobsaddon_icon', url: 'JobsAddon', tooltip: 'JobsAddon' },
    { texture: 'levelz_icon', url: 'LevelZ', tooltip: 'LevelZ' },
    { texture: 'libz_icon', url: 'LibZ', tooltip: 'LibZ' },
    { texture: 'medievalweapons_icon', url: 'MedievalWeapons', tooltip: 'MedievalWeapons' },
    { texture: 'nameplate_icon', url: 'Nameplate', tooltip: 'Nameplate' },
    { texture: 'numismaticclaim_icon', url: 'NumismaticClaim', tooltip: 'NumismaticClaim' },
    { texture: 'nutritionz_icon', url: 'NutritionZ', tooltip: 'NutritionZ' },
    { texture: 'oblivion_icon', url: 'Oblivion', tooltip: 'Oblivion' },
    { texture: 'partyaddon_icon', url: 'PartyAddon', tooltip: 'PartyAddon' },
    { texture: 'patchoulibutton_icon', url: 'PatchouliButton', tooltip: 'PatchouliButton' },
    { texture: 'questz_icon', url: 'QuestZ', tooltip: 'QuestZ' },
    { texture: 'reciperemover_icon', url: 'RecipeRemover', tooltip: 'RecipeRemover' },
    { texture: 'revive_icon', url: 'Revive', tooltip: 'Revive' },
    { texture: 'rewardz_icon', url: 'RewardZ', tooltip: 'RewardZ' },
    { texture: 'rpgdifficulty_icon', url: 'RpgDifficulty', tooltip: 'RpgDifficulty' },
    { texture: 'rpgloot_icon', url: 'RpgZ', tooltip: 'RpgZ' },
    { texture: 'sitlog_icon', url: 'SitLog', tooltip: 'SitLog' },
    { texture: 'smitherz_icon', url: 'SmitherZ', tooltip: 'SmitherZ' },
    { texture: 'spartanweapons_icon', url: 'SpartanWeapons', tooltip: 'SpartanWeapons' },
    { texture: 'spoiledz_icon', url: 'SpoiledZ', tooltip: 'SpoiledZ' },
    { texture: 'stamina_icon', url: 'Stamina', tooltip: 'Stamina' },
    { texture: 'talkbubbles_icon', url: 'TalkBubbles', tooltip: 'TalkBubbles' },
    { texture: 'tiered_icon', url: 'TieredZ', tooltip: 'TieredZ' },
    { texture: 'tooltiprareness_icon', url: 'TooltipRareness', tooltip: 'TooltipRareness' },
    { texture: 'travelerz_icon', url: 'TravelerZ', tooltip: 'TravelerZ' },
    { texture: 'villagerquests_icon', url: 'VillagerQuests', tooltip: 'VillagerQuests' },
    { texture: 'villagertradefix_icon', url: 'VillagerTradeFix', tooltip: 'VillagerTradeFix' },
    { texture: 'voidz_icon', url: 'VoidZ', tooltip: 'VoidZ' },
    { texture: 'welcomescreen_icon', url: 'WelcomeScreen', tooltip: 'WelcomeScreen' }
];

const resourceIcons = [
    { texture: 'medievalmusic_icon', url: 'MedievalMusic', tooltip: 'MedievalMusic' },
    { texture: 'rays3drails_icon', url: 'Rays3DRails', tooltip: "Ray's 3D Rails" },
    { texture: 'rays3dladders_icon', url: 'Rays3DLadders', tooltip: "Ray's 3D Ladders" }
];

const packIcons = [
    { texture: 'aged_icon', url: 'Aged', tooltip: 'Aged' },
    { texture: 'agedlite_icon', url: 'AgedLite', tooltip: 'Aged Lite' }
];

const types = ['blocks', 'items', 'entities'];

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

        case 'reach_i_gem':
            return 'reach_1_gem';
        case 'reach_ii_gem':
            return 'reach_2_gem';
        case 'reach_iii_gem':
            return 'reach_3_gem';
        case 'reach_iv_gem':
            return 'reach_4_gem';
        case 'reach_v_gem':
            return 'reach_5_gem';

        case 'haste_i_gem':
            return 'haste_1_gem';
        case 'haste_ii_gem':
            return 'haste_2_gem';
        case 'haste_iii_gem':
            return 'haste_3_gem';
        case 'haste_iv_gem':
            return 'haste_4_gem';
        case 'haste_v_gem':
            return 'haste_5_gem';

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

        case 'battle_axe':
            return 'diamond_oak_battle_axe';
        case 'club':
            return 'oak_club';
        case 'cutlass':
            return 'diamond_oak_cutlass';
        case 'dagger':
            return 'diamond_oak_dagger';
        case 'glaive':
            return 'diamond_oak_glaive';
        case 'greatsword':
            return 'diamond_oak_greatsword';
        case 'halberd':
            return 'diamond_oak_halberd';
        case 'javelin':
            return 'diamond_oak_javelin';
        case 'katana':
            return 'diamond_oak_katana';
        case 'kunai':
            return 'diamond_oak_kunai';
        case 'mace':
            return 'diamond_oak_mace';
        case 'rapier':
            return 'diamond_oak_rapier';
        case 'scythe':
            return 'diamond_oak_scythe';
        case 'spear':
            return 'diamond_oak_spear';
        case 'staff':
            return 'oak_staff';
        case 'wooden_spear':
            return 'oak_spear';

        default:
            return null;
    }
}
