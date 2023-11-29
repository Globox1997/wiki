---
title: Curse of Inaccuracy
project: additionz
summary: additionz enchantment curse of inaccuracy
---
# Curse of Inaccuracy
<div class="main_table">
<div class="left_main_table">
<table class="left_table">
    <tbody>
        <tr>
            <td class="first-column">ID</td>
            <td class="second-column">
            ```
            additionz:inaccuracy_curse
            ```
            </td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">Level</td>
            <td class="second-column">1 - 3</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">Primary Items</td>
            <td class="second-column"><a href="https://minecraft.wiki/w/Bow" target="_blank">Bows</a><br><a href="https://minecraft.wiki/w/Crossbow" target="_blank">Crossbows</a></td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">Enchantment Weight</td>
            <td class="second-column">2</td>
        </tr>
    </tbody>
</table>
</div>
    <img src="/wiki/assets/additionz/items/enchanted_book.png" loading="lazy" class="right_img_table"/>
</div>

## Description
Curse of inaccuracy is an [enchantment](https://minecraft.wiki/w/Enchanting#Summary_of_enchantments) that applies only to [bows](https://minecraft.wiki/w/Bow) and [crossbows](https://minecraft.wiki/w/Crossbow) which makes it inaccurat.

## Obtaining
#### Loot
Curse of inaccuracy is a [treasure enchantment](https://minecraft.wiki/w/Enchanting#Summary_of_enchantments). It can be obtained from [End City](https://minecraft.wiki/w/End_City), [Jungle Temple](https://minecraft.wiki/w/Jungle_Pyramid), and Stronghold [chest loot](https://minecraft.wiki/w/Chest_loot).

## Commands
=== "Curse of Inaccuracy I"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:inaccuracy_curse",lvl:1s}]}
    ```
=== "Curse of Inaccuracy II"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:inaccuracy_curse",lvl:2s}]}
    ```
=== "Curse of Inaccuracy III"
    ```mcfunction
    /give @s minecraft:enchanted_book{StoredEnchantments:[{id:"additionz:inaccuracy_curse",lvl:3s}]}
    ```
???+ danger "Incompatibility with LevelZ"
    === "With LevelZ"
        ```json
        "inaccuracy_curse_enchantment": false
        // disable when LevelZ mod is installed
        ```
        <div class="result" markdown>

        You have to **disable** this enchantment in order to use levelz properly!

        </div>

    === "Without LevelZ"
        ```json
        "inaccuracy_curse_enchantment": true
        // disable when LevelZ mod is installed
        ```
