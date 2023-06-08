# Curse of Inaccuracy
<div class="combi" markdown>
<div class="divthing">
<table class="tablething">
    <thead>
        <tr>
            <th class="first-column">Infos</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="first-column">Item</td>
            <td class="second-column">minecraft:enchanted_book</td>
        </tr>
        <tr>
            <td class="first-column">ID</td>
            <td class="second-column">additionz:inaccuracy_curse</td>
        </tr>
        <tr>
            <td class="first-column">Level</td>
            <td class="second-column">1 - 3</td>
        </tr>
    </tbody>
</table>
</div>
<div markdown>
![](../../../assets/additionz/enchantments/enchanted_book.png){ loading=lazy }
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
    ```
