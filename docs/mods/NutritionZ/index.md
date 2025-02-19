---
title: NutritionZ
project: nutritionz
summary: nutritionz wiki
---
<script src="/wiki/javascripts/data.js"></script>
<script src="/wiki/javascripts/sidebar.js" id="nutritionz"></script>

![NutritionZ Banner](/wiki/assets/general/banner/nutritionzbanner.png)

---
<div id="showcase-gallery" modid="nutritionz" image_1="nutritionz_image_1"></div>
<script src="/wiki/javascripts/showcase.js"></script>
---

# Description
NutritionZ adds a nutrition system to enhance the gameplay.

# Adjustments
## Default Datapacks & Mod Compat
NutritionZ provides some [default datapacks](https://github.com/xR4YM0ND/NutritionZ/tree/1.21/src/main/resources/resourcepacks) for other mods. You can disable/enable them via config.
You can add other mod compats via datapack. Just follow the structure `data/somemod/nutrition/somename.json`.

Here's an example from the default vanilla datapack:

```json
{
    "minecraft:cooked_cod": { // The default datapacks provide 5 points for half saturation
        "carbohydrates": 0,
        "protein": 16,
        "fat": 3,
        "vitamins": 0,
        "minerals": 6
    }
}
```

## Nutrition Manager
You can tweak the [default manager](https://github.com/xR4YM0ND/NutritionZ/blob/1.21/src/main/resources/data/nutritionz/nutrition_manager/default.json) via datapack as well. `data/somemod/nutrition_manager/somename.json`

With this you can replace the positive effects & attributes from all 5 nutrients, as well as the negatives.

Example:

```json
{
    "minerals": {
        "replace": true,
        "positive": {
            "generic.armor_toughness": { // attribute
                "operation": "ADD_VALUE", // ADD_VALUE, ADD_MULTIPLIED_BASE , ADD_MULTIPLIED_TOTAL
                "value": 1.0 // gives +1 Armor Toughness per level -> e.g. +20 max level
            },
            "minecraft:haste": { // effect
                "duration": 319, // wouldn`t recommend to lower this on effects
                "amplifier": 0 // equals Haste I
            }
        },
        "negative": {
            "generic.armor_toughness": {
                "operation": "ADD_VALUE",
                "value": 1.0 // needs to be positive value -> will be negative automatically
            },
            "minecraft:mining_fatigue": {
                "duration": 319,
                "amplifier": 0
            }
        }
    }
}
```

Max Nutrition & thresholds can be set in the `nutritionz.json5` config.

```json
{
	"maxNutrition": 100, // Max nutrition for one nutrient
	"negativeNutrition": 10, // 0 - 10 = negative effects / attributes (negative threshold)
	"positiveNutrition": 90, // 90 - 100 = positive effects / attributes (positive threshold)
}
```

# Misc
This mod is developed for <img src="https://fabricmc.net/assets/logo.png" alt="Fabric" width="16" height="16" style="position: relative; top: 3px;"> [Fabric](https://fabricmc.net/).  
There are no plans to develop a <img src="https://neoforged.net/img/authors/neoforged.png" alt="NeoForged" width="16" height="16" style="position: relative; top: 3px;"> [Forge](https://neoforged.net/) version.  

## Modpack Permission
Feel free to use it in any modpacks.  

## Bug Report
Just report bugs at the github page.  

# Dependencies

!!! apple-keyboard-control "Required"
    === "Curseforge :simple-curseforge:"

        [Fabric API](https://www.curseforge.com/minecraft/mc-mods/fabric-api){ .md-button .md-button--primary }
        [Cloth Config API](https://curseforge.com/minecraft/mc-mods/cloth-config){ .md-button .md-button--primary }

    === "Modrinth :simple-modrinth:"

        [Fabric API](https://modrinth.com/mod/fabric-api){ .md-button .md-button--primary }
        [Cloth Config API](https://modrinth.com/mod/cloth-config){ .md-button .md-button--primary }

## Changelog
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<div id="log" modid="nutritionz"></div>
