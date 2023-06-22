---
title: Curse of Inaccuracy
project: additionz
summary: additionZ enchantment curse of inaccuracy
---
# Curse of Inaccuracy
<div class="combi">
<div class="divthing">
<table class="tablething">
    <tbody>
        <tr>
            <td class="first-column">Item</td>
            <td class="second-column">minecraft:enchanted_book</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">ID</td>
            <td class="second-column">additionz:inaccuracy_curse</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">Level</td>
            <td class="second-column">1 - 3</td>
        </tr>
    </tbody>
</table>
</div>
<div class="div-img-center">
<img src="../../../../assets/additionz/enchantments/enchanted_book.png" loading="lazy" />
</div>
</div>

## Description

???+ danger "Incompatibility with LevelZ"
    === "With LevelZ"
        ```json
        "inaccuracy_curse_enchantment": false,
        // default: true,
        // disable when LevelZ mod is installed
        ```
        <div class="result" markdown>

        You have to **disable** this enchantment in order to use levelz properly!

        </div>

    === "Without LevelZ"
        ```json
        "inaccuracy_curse_enchantment": true,
        // default: true,
        // disable when LevelZ mod is installed
        ```

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
<<<<<<< HEAD
    ```
=======
    ```
>>>>>>> fa010dc2e389f2f50e93c201848fc35630d4417d
